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
