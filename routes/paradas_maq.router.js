      //IMPORTS

const express = require('express');
const boom = require('@hapi/boom');
const paradas = require('../services/paradas_maquina.service');


      //ROUTER

const enrutador_paradas_maq = express.Router();


      //ROUTE HANDLER: GET

enrutador_paradas_maq.get('/', (req, res)=>{

  res.json(paradas);
})


      //ROUTE HANDLER: POST

enrutador_paradas_maq.post('/', (req, res)=>{   //Este es el manejador para cargar las paradas de maquina
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
