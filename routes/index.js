const programa_mantenimiento = require('./prog_mantenimiento.router.js');
const paradas_maquina = require('./paradas_maq.router.js');

const express = require('express');
const enrutador_versiones = express.Router();


function rutasApi(app){
  app.use('/API/V1', enrutador_versiones);

  enrutador_versiones.use('/programa_mantenimiento', programa_mantenimiento);
  enrutador_versiones.use('/paradas_maquina', paradas_maquina);
}

module.exports = rutasApi;

