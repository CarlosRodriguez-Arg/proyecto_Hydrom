const programa_mantenimiento = require('./endpointPrueba');

function rutasApi(app){
  app.use('/programa_mantenimiento', programa_mantenimiento);
}

module.exports = rutasApi;

