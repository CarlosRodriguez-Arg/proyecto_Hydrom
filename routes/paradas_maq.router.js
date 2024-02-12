      //IMPORTS

const { faker } = require('@faker-js/faker');
const express = require('express');

      //ROUTER
const enrutador_paradas_maq = express.Router();


      //ROUTE HANDLER: GET

enrutador_paradas_maq.get('/', (req, res)=>{
  let paradas = [];

  for (let index = 0; index < 10; index++) {   //generamos informacion falsa para probar el manejador de ruta
    paradas.push({
      fecha_parada: faker.date.birthdate(),
      hora_parada: faker.date.anytime(),
      maquina: faker.airline.airplane(),
      tiempo_parada: faker.date.anytime(),
      fecha_puesta_marcha: faker.date.anytime(),
      hora_puesta_marcha: '20:30',
      tipo_intervencion: 'Correctiva',
    })
  }
  res.json(paradas)
})


      //ROUTE HANDLER: POST

enrutador_paradas_maq.post('/', (req, res)=>{   //Este es el manejador para cargar las paradas de maquina
  const peticion = req.body;
  res.status(201).json(peticion);
})


      //ROUTE HANDLER: PATCH

enrutador_paradas_maq.patch('/:id_parada', (req, res)=>{   //Este es el manejador para actualizar las paradas de maquina
  const { id_parada } = req.params;

  res.json({
    id: id_parada,
    message: 'Se actualizo la parada de maquina'
  })
})


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
