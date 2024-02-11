const { faker } = require('@faker-js/faker');
const express = require('express');
const enrutador_paradas_maq = express.Router();



enrutador_paradas_maq.get('/', (req, res)=>{
  let paradas = [];

//generamos informacion falsa para probar el manejador de ruta
  for (let index = 0; index < 10; index++) {
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


//Este es el manejador para cargar las paradas de maquina
enrutador_paradas_maq.post('/', (req, res)=>{
  const peticion = req.body;
  res.json(peticion);
})


module.exports = enrutador_paradas_maq;
