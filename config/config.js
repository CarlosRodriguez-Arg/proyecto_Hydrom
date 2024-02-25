/*PARA QUE NODE LEA AUTOMÁTICAMENTE ESTE ARCHIVO, Y NO TENGAMOS QUE PASARLE EN LA
EJECUCIÓN LOS VALORES DE CADA VARIABLE DE ENTORNO, USAMOS EL PAQUETE ""DOTENV" */

require('dotenv').config();

const config = {
  env: process.eventNames.NODE_ENV || 'dev',
  port: process.port.NODE_PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME
};

module.exports = config;
