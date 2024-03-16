//IMPORTS

const express = require('express');
const servicioParadas = require('../services/paradas_maquina.service');
const {post_esquema_parada, get_esquema_parada, patch_esquema_parada} = require('../schemas/parada_maq.schema');
const {generador_validador} = require('../middlewares/validador_esquemas');


//INICIALIZACION DE SERVICIOS

const servicio = new servicioParadas();


//GENERAMOS EL ENRUTADOR

const enrutador_paradas_maq = express.Router();


//ROUTE HANDLER: GET ALL

enrutador_paradas_maq.get('/', async (req, res, next)=>{
  try{
    const rta = await servicio.listarParadas();
    res.json(rta);
  }catch(error){
    next(error);
  }
  }
);


//ROUTE HANDLER: GET ONE

enrutador_paradas_maq.get('/:idParada',
  generador_validador(get_esquema_parada, 'params'),
  async (req, res, next)=>{
    try{
      const {idParada} = req.params;
      const rta = servicio.encontrarParada(idParada)
      res.json(rta);
    }catch(error){
      next(error);
    }
  }
);


//ROUTE HANDLER: POST

enrutador_paradas_maq.post(  //Este es el manejador para cargar las paradas de maquina
  '/',
  generador_validador(post_esquema_parada, 'body'),
  async (req, res, next)=>{
    try{
      const nuevaParada = await servicio.nuevaParada(req.body);
      res.status(201).json(nuevaParada);
    }catch(error){
      next(error);
    }
  }
);


//ROUTE HANDLER: PATCH

enrutador_paradas_maq.patch(
  '/:idParada',
  generador_validador(get_esquema_parada, 'params'),
  generador_validador(patch_esquema_parada, 'body'),
  async (req, res, next)=>{
    const {idParada} = req.params;
    const cambios = req.body;
    try{
      const paradaActualizada = await servicio.actualizarParada(idParada, cambios);
      res.status(200).json(paradaActualizada);
    }catch(error){
      next(error);
    }
  }
);


//ROUTE HANDLER: DELETE

enrutador_paradas_maq.delete(
  '/:idParada',
  generador_validador(get_esquema_parada, 'params'),
  async (req, res, next)=>{
    const {idParada} = req.params;
    try{
      const paradaEliminada = await servicio.eliminarParada(idParada);
      res.status(200).json(paradaEliminada);
    }catch(error){
      next(error);
    }
  }
);


//EXPORT

module.exports = enrutador_paradas_maq;
