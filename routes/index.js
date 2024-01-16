const enrutadorPrueba = require('./endpointPrueba');

function rutasApi(app){
  app.use(enrutadorPrueba);
}

module.exports = rutasApi;

