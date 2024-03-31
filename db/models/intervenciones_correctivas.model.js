//IMPORTO LAS HERRAMIENTAS PARA DEFINIR EL MODELO

const {DataTypes, Model, Sequelize} = require('sequelize');


//Defino el nombre de la tabla para poder usarla como argumento al usar queryInterface

const INTERV_CORR_TABLA = 'intervenciones_correctivas';


//Defino el esquema de la tabla

const interCorrSchema = {
  /*Se especifican las columnas de la tabla:
      id_int_correctiva
      id_parada
      fecha_hora_solicitud
      fecha_hora_inicio_inter
      descripcion_falla
      posibles_causas
      id_sistema_intervencion
      acciones_correctivas
      fecha_hora_entrega*/

    id_int_correctiva:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_parada:{
      type: DataTypes.INTEGER,
    },
    fecha_hora_solicitud:{
      type: DataTypes.DATE,
      set(value){
        this.setDataValue('fecha_hora_solicitud', Sequelize.fn('TO_TIMESTAMP', value, 'YYYY-MM-DD HH24:MI'));
      }
    },
    fecha_hora_inicio_inter:{
      type: DataTypes.DATE,
      set(value){
        this.setDataValue('fecha_hora_inicio_inter', Sequelize.fn('TO_TIMESTAMP', value, 'YYYY-MM-DD HH24:MI'));
      }
    },
    descripcion_falla:{
      type: DataTypes.TEXT('tiny'),
    },
    posibles_causas: {
      type: DataTypes.TEXT('tiny'),
    },
    acciones_correctivas: {
      type: DataTypes.TEXT('tiny'),
    },
    fecha_hora_entrega: {
      type: DataTypes.DATE,
      set(value){
        this.setDataValue('fecha_hora_entrega', Sequelize.fn('TO_TIMESTAMP', value, 'YYYY-MM-DD HH24:MI'));
      }
    }
};


//Defino el modelo extendiendo la clase Model

class InterCorrectivas extends Model{

  /*Al usar init debemos pasarle en el objeto de configuracion la conexion
a la base de datos "sequelize". Asi queda vinculado con Model.*/

  static config(sequelize){
      return {
        sequelize,
        tableName: INTERV_CORR_TABLA,
        modelName: 'InterCorrectivas',
        timestamps: false
      }
    }
};


//Exporto para usar en "index.js"

module.exports = {InterCorrectivas, INTERV_CORR_TABLA, interCorrSchema};
