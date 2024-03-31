//IMPORTS

const express = require('express');
const {post_esquema_correctiva, get_esquema_correctiva, patch_esquema_correctiva} = require('../schemas/interv_correctivas.schema');
const servicioIntervCorrectivas = require('../services/interv_correctivas.service');
const {generador_validador} = require('../middlewares/validador_esquemas');

//INICIALIZAMOS EL SERVICIO

const servicio = new servicioIntervCorrectivas();


//ROUTER

const enrutador_int_correctivas = express.Router();


//ROUTE HANDLER: GET ALL

enrutador_int_correctivas.get(
  '/',
  async (req, res, next)=>{
    try{
      const rta = await servicio.listarIntervenciones();
      res.status(200).json(rta);
    }catch(error){
      next(error);
    }
  }
);


//ROUTE HANDLER: GET ONE

enrutador_int_correctivas.get(
  '/:id_int_correctiva',
  generador_validador(get_esquema_correctiva, 'params'),
  async (req, res, next)=>{
    try{
      const {id_int_correctiva} = req.params;
      const rta = await servicio.encontrarIntervencion(Number(id_int_correctiva));
      res.status(200).json(rta);
    }catch(error){
      next(error);
    }
  }
);


//ROUTE HANDLER: POST

enrutador_int_correctivas.post(
  '/',
  generador_validador(post_esquema_correctiva, 'body'),
  async (req, res, next)=>{
    try{
      const nuevaIntervencion = await servicio.nuevaInterv(req.body);
      res.status(201).json(nuevaIntervencion);
    }catch(error){
      next(error);
    }
  }
);


//ROUTE HANDLER: PATCH

enrutador_int_correctivas.patch(
  '/:id_int_correctiva',
  generador_validador(get_esquema_correctiva, 'params'),
  generador_validador(patch_esquema_correctiva, 'body'),
  async(req, res, next)=>{
    try{
      const {id_int_correctiva} = req.params;
      const intervActializada = await servicio.actualizarIntervencion(Number(id_int_correctiva), req.body);
      res.status(200).json(intervActializada);
    }catch(error){
      next(error);
    }
  }
);


//ROUTE HANDLER: DELETE

enrutador_int_correctivas.delete(
  '/:id_int_correctiva',
  generador_validador(get_esquema_correctiva, 'params'),
  async (req, res, next)=>{
    const {id_int_correctiva} = req.params;
    try{
      const intervencionEliminada = await servicio.eliminarIntervencion(Number(id_int_correctiva));
      res.status(200).send(intervencionEliminada);
    }catch(error){
      next(error);
    }
  }
);


//EXPORT

module.exports = enrutador_int_correctivas;
