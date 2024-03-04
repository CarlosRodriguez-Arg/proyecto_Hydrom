//IMPORTAMOS ARCHIVO CONFIG CON LOS VALORES DE LAS VARIABLES DE ENTORNO
const config = require('../config/config');

//GENERAMOS UNA URI PARA LA CONEXION
const USER = encodeURIComponent(config.dbUser); //PRIMERO PROTEGEMOS LOS PARÁMETROS DELICADOS
const PASSWORD = encodeURIComponent(config.dbPass);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres'
  },
  production: {
    url: URI,
    dialect: 'postgres'
  }
}

