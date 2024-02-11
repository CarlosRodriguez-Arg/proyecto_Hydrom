      //IMPORTS

const { faker } = require('@faker-js/faker');
const express = require('express');


      //ROUTER
const enrutador_programa_mantenimiento = express.Router();


      //ROUTE HANDLER: GET

enrutador_programa_mantenimiento.get('/', (req, res)=>{
  let tareas_programadas = [];

  for (let index = 0; index < 10; index++) {    //generamos informacion falsa para probar el manejador de ruta
    tareas_programadas.push({

      maquina: faker.airline.airplane(),   //Esta es la informacion que necesitaria ver en este ENDPOINT
      tipo_tarea: 'reemplazar',
      componente: faker.commerce.productName(),
      criticidad: faker.number.int({min:0,max:10}),
      frecuencia: 'mensual',
      duracion_aprox: faker.number.float({min:1, max:100}),
      fecha_ultima_int: faker.date.anytime(),
      fecha_prox_int: faker.date.anytime(),
      referencia_manual: faker.string.alphanumeric(),
      rep_insumos: [{
        id_rep_insumo: 3322,
        denominacion: 'Aceite Castrol',
        especificaciones_tecnicas: 'SAE 10W40 semi-sintetico',
        cantidad: 10,
        unidad_medida: 'litros'
      },{
        id_rep_insumo: 302,
        denominacion: 'rodamiento skf',
        especificaciones_tecnicas: 'a rodillos conico',
        cantidad: 1,
        unidad_medida: 'unidad'
      }]
    });
  }

  res.json(tareas_programadas); //enviamos repuesta
})

enrutador_programa_mantenimiento.get('/tareas/:id_maq', (req, res)=>{
  const {id_maq} = req.params;
  let tareas_programadas = [];

  for (let index = 0; index < id_maq; index++) {
    tareas_programadas.push({
      maquina: faker.airline.airplane(),
      tipo_tarea: 'reparar',
      componente: faker.commerce.productName(),
      criticidad: faker.number.int({min:0,max:10}),
      frecuencia: 'mensual',
      duracion_aprox: faker.number.float({min:1, max:100}),
      fecha_ultima_int: faker.date.anytime(),
      fecha_prox_int: faker.date.anytime(),
      referencia_manual: faker.string.alphanumeric(),
    });
  }

  res.json(tareas_programadas);
})


      //EXPORT

module.exports = enrutador_programa_mantenimiento;
