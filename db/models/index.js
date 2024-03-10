// En este archivo inicializamos todas las tablas de la base de datos

const {Parada_maquina, paradasSchema} = require('./paradas_maquina.model');
// const {Parada_maquina, paradasSchema} = require('./paradas_maquina.model');
// const {Parada_maquina, paradasSchema} = require('./paradas_maquina.model');


//Definimos una funcion que va a pasarle la conexion de la base de datos a cada modelo para configurarlo

function configurarModelos(sequelize){
  Parada_maquina.init(paradasSchema, Parada_maquina.config(sequelize));
  // Parada_maquina.init(paradasSchema, Parada_maquina.config(sequelize));
  // Parada_maquina.init(paradasSchema, Parada_maquina.config(sequelize));

}


module.exports = configurarModelos;
