// En este archivo inicializamos todas las tablas de la base de datos

const {ParadaMaquina, paradasSchema} = require('./paradas_maquina.model');
const {InterCorrectivas, interCorrSchema} = require('./intervenciones_correctivas.model');
// const {Parada_maquina, paradasSchema} = require('./paradas_maquina.model');


//Definimos una funcion que va a pasarle la conexion de la base de datos a cada modelo para configurarlo

function configurarModelos(sequelize){
  ParadaMaquina.init(paradasSchema, ParadaMaquina.config(sequelize));
  InterCorrectivas.init(interCorrSchema, InterCorrectivas.config(sequelize));
  // Parada_maquina.init(paradasSchema, Parada_maquina.config(sequelize));

}


module.exports = configurarModelos;
