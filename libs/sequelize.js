//EN LA CARPETA LIBS VAMOS A MANEJAR LAS CONEXIONES A TERCEROS: APIS, BASES DE DATOS, ETC.
//EN ESTE ARCHIVO VAMOS A INTEGRAR LA BASE DE DATOS POSTGRES CON NODE

//IMPORTAMOS EL ORM 'SEQUELIZE'

const {Sequelize} = require('sequelize');


//IMPORTAMOS LA CONFIGURACIÓN DE LA BASE DE DATOS

const config = require('../config/config');


//CREAMOS UNA URI CON TODOS LOS PARÁMETROS DE CONFIGURACIÓN PARA CONECTARNOS A LA BASE DE DATOS

const USER = encodeURIComponent(config.dbUser); //PRIMERO PROTEGEMOS LOS PARÁMETROS DELICADOS
const PASSWORD = encodeURIComponent(config.dbPass);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


//CREAMOS UNA INSTANCIA DE SEQUELIZE, ESTA NOS GENERA: LA CONEXIÓN E IMPLEMENTA INTERNAMENTE LOS POOL

const sequelize = new Sequelize(URI);

async function pruebaConexion(){
    try {
        await sequelize.authenticate();
        console.log('La conexión a la base de datos fue exitosa');
      } catch (error) {
        console.error('La conexión a la base de datos falló', error);
      }
}

pruebaConexion();


module.exports = sequelize;

