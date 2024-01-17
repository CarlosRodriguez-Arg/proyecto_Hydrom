const enrutadorPrueba = require('./endpointPrueba');

function rutasApi(app){
  app.use('/prueba', enrutadorPrueba);
}

module.exports = rutasApi;

