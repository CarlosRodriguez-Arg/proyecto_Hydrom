//IMPORTS

const express = require('express');
const {post_esquema_prog_intervenciones, get_esquema_prog_intervenciones, patch_esquema_prog_intervenciones} = require('../schemas/prog_intervenciones.schema');
const servicioProgIntervencion = require('../services/prog_intervenciones.service');
const {generador_validador} = require('../middlewares/validador_esquemas');


//INICIALIZAMOS EL SERVICIO

const servicio = new servicioProgIntervencion();


//ROUTER
const enrutador_prog_intervenciones = express.Router();


//ROUTE HANDLER: GET ALL

enrutador_prog_intervenciones.get(
  '/',
  async (req, res, next)=>{
    try{
      const rta = await servicio.listarProgIntervenciones();
      res.status(200).json(rta);
    }catch(error){
      next(error);
    }
  }
);


//ROUTE HANDLER: GET ONE

enrutador_prog_intervenciones.get(
  '/:id_prog_intervencion',
  generador_validador(get_esquema_prog_intervenciones, 'params'),
  async (req, res, next)=>{
    try{
      const {id_prog_intervencion} = req.params;
      const rta = await servicio.encontrarProgIntervencion(Number(id_prog_intervencion));
      res.status(200).json(rta);
    }catch(error){
      next(error);
    }
  }
);


//ROUTE HANDLER: POST

enrutador_prog_intervenciones.post(
  '/',
  generador_validador(post_esquema_prog_intervenciones, 'body'),
  async (req, res, next)=>{
    try{
      const nuevoProgInter = await servicio.nuevoProgInter(req.body);
      res.status(201).json(nuevoProgInter);
    }catch(error){
      next(error);
    }
  }
);


//ROUTE HANDLER: PATCH

enrutador_prog_intervenciones.patch(
  '/:id_prog_intervencion',
  generador_validador(get_esquema_prog_intervenciones, 'params'),
  generador_validador(patch_esquema_prog_intervenciones, 'body'),
  async(req, res, next)=>{
    try{
      const {id_prog_intervencion} = req.params;
      const progIntervActualizado = await servicio.actualizarProgIntervencion(Number(id_prog_intervencion), req.body);
      res.status(200).json(progIntervActualizado);
    }catch(error){
      next(error);
    }
  }
);


//ROUTE HANDLER: DELETE

enrutador_prog_intervenciones.delete(
  '/:id_prog_intervencion',
  generador_validador(get_esquema_prog_intervenciones, 'params'),
  async (req, res, next)=>{
    const {id_prog_intervencion} = req.params;
    try{
      const progIntervencionEliminada = await servicio.eliminarProgIntervencion(Number(id_prog_intervencion));
      res.status(200).send(progIntervencionEliminada);
    }catch(error){
      next(error);
    }
  }
);


//EXPORT

module.exports = enrutador_prog_intervenciones;
