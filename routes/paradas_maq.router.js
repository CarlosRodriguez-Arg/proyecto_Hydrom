const { faker } = require('@faker-js/faker');
const express = require('express');
const paradas_maq = express.Router();

paradas_maq.get('/info_paradas', (req, res)=>{
  let paradas = [];

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

module.exports = paradas_maq;
