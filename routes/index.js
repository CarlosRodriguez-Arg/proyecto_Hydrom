const enrutador_programa_mantenimiento = require('./prog_mantenimiento.router.js');
const enrutador_paradas_maq = require('./paradas_maq.router.js');
const enrutador_int_correctivas = require('./intervenciones_correctivas.router.js');

const express = require('express');
const enrutador_versiones = express.Router();


function rutasApi(app){
  app.use('/API/V1', enrutador_versiones);

  enrutador_versiones.use('/programa_mantenimiento', enrutador_programa_mantenimiento);
  enrutador_versiones.use('/paradas_maquina', enrutador_paradas_maq);
  enrutador_int_correctivas.use('/intervenciones_correctivas', enrutador_int_correctivas);
}

module.exports = rutasApi;

