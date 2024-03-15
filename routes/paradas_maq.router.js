//IMPORTS

const express = require('express');
const boom = require('@hapi/boom');
const servicioParadas = require('../services/paradas_maquina.service');
const {post_esquema_parada} = require('../schemas/parada_maq.schema');
const {generador_validador} = require('../middlewares/validador_esquemas');


//INICIALIZACION DE SERVICIOS

const servicio = new servicioParadas();


//ROUTER

const enrutador_paradas_maq = express.Router();


//ROUTE HANDLER: GET ALL

enrutador_paradas_maq.get('/', async (req, res, next)=>{
  try{
  const rta = await servicio.listarParadas();
  res.json(rta);
  }catch(error){
    next(error);
  }
})


//ROUTE HANDLER: GET ONE

  enrutador_paradas_maq.get('/:idParada', async (req, res, next)=>{
    try{
      const {idParada} = req.params;
      const rta = servicio.encontrarParada(idParada)
      res.json(rta);
    }catch(error){
      next(error);
    }
  })


//ROUTE HANDLER: POST

enrutador_paradas_maq.post('/',  //Este es el manejador para cargar las paradas de maquina
  generador_validador(post_esquema_parada, 'body'),
  (req, res)=>{
    const peticion = req.body;
    res.status(201).json(peticion);
})


      //ROUTE HANDLER: PATCH

enrutador_paradas_maq.patch('/:id_parada', (req, res, next)=>{   //Este es el manejador para actualizar las paradas de maquina

  const { id_parada } = req.params;

  const body = req.body;

  const parada_a_actualizar = paradas.find((elemento)=>{
    return elemento.id_parada === Number(id_parada);
  });

  if (!parada_a_actualizar){

    next(boom.notFound('No existe la parada de maquina que intenta modificar'));

  }else{

    const indice = paradas.indexOf(parada_a_actualizar);

    paradas[indice] = {
      ...parada_a_actualizar,
      ...body
    };

    res.status(200).json(paradas[indice]);
  }
});


      //ROUTE HANDLER: DELETE

enrutador_paradas_maq.delete('/:id_parada', (req, res)=>{
  const { id_parada} = req.params;

  res.json({
    id: id_parada,
    message: 'Se elimino la parada'
  })
});


      //EXPORT

module.exports = enrutador_paradas_maq;
