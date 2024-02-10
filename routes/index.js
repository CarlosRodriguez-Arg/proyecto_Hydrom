const programa_mantenimiento = require('./prog_mantenimiento.js');

function rutasApi(app){
  app.use('/programa_mantenimiento', programa_mantenimiento);
}

module.exports = rutasApi;

