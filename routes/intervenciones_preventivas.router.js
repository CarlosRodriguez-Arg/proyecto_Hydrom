//IMPORTS

const express = require('express');
const {post_esquema_preventiva, get_esquema_preventiva, patch_esquema_preventiva} = require('../schemas/interv_preventivas.schema');
const servicioIntervPreventivas = require('../services/interv_preventivas.service');
const {generador_validador} = require('../middlewares/validador_esquemas');


//INICIALIZAMOS EL SERVICIO

const servicio = new servicioIntervPreventivas();


//ROUTER

const enrutador_int_preventivas = express.Router();


//ROUTE HANDLER: GET ALL

enrutador_int_preventivas.get(
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

enrutador_int_preventivas.get(
  '/:id_int_preventiva',
  generador_validador(get_esquema_preventiva, 'params'),
  async (req, res, next)=>{
    try{
      const {id_int_preventiva} = req.params;
      const rta = await servicio.encontrarIntervencion(Number(id_int_preventiva));
      res.status(200).json(rta);
    }catch(error){
      next(error);
    }
  }
);


//ROUTE HANDLER: POST

enrutador_int_preventivas.post(
  '/',
  generador_validador(post_esquema_preventiva, 'body'),
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

enrutador_int_preventivas.patch(
  '/:id_int_preventiva',
  generador_validador(get_esquema_preventiva, 'params'),
  generador_validador(patch_esquema_preventiva, 'body'),
  async(req, res, next)=>{
    try{
      const {id_int_preventiva} = req.params;
      const intervActializada = await servicio.actualizarIntervencion(Number(id_int_preventiva), req.body);
      res.status(200).json(intervActializada);
    }catch(error){
      next(error);
    }
  }
);


//ROUTE HANDLER: DELETE

enrutador_int_preventivas.delete(
  '/:id_int_preventiva',
  generador_validador(get_esquema_preventiva, 'params'),
  async (req, res, next)=>{
    const {id_int_preventiva} = req.params;
    try{
      const intervencionEliminada = await servicio.eliminarIntervencion(Number(id_int_preventiva));
      res.status(200).send(intervencionEliminada);
    }catch(error){
      next(error);
    }
  }
);


//EXPORT

module.exports = enrutador_int_preventivas;
