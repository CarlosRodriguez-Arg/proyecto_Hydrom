// En este archivo inicializamos todas las tablas de la base de datos

const {ParadaMaquina, paradasSchema} = require('./paradas_maquina.model');
const {InterCorrectivas, interCorrSchema} = require('./intervenciones_correctivas.model');
const {InterPreventivas, interPreventivaSchema} = require('./intervenciones_preventivas.model');


//Definimos una funcion que va a pasarle la conexion de la base de datos a cada modelo para configurarlo

function configurarModelos(sequelize){
  ParadaMaquina.init(paradasSchema, ParadaMaquina.config(sequelize));
  InterCorrectivas.init(interCorrSchema, InterCorrectivas.config(sequelize));
  InterPreventivas.init(interPreventivaSchema, InterPreventivas.config(sequelize));

}


module.exports = configurarModelos;
