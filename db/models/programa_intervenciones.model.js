const {DataTypes, Model} = require('sequelize');

//Defino el nombre de la tabla para poder usarla como argumento al usar queryInterface

const PROG_INTERV_TABLA = 'programa_intervenciones';


const progIntervSchema = {
  /*Se especifican las columnas de la tabla:
      id_prog_intervencion
      id_int_preventiva
      id_tarea_programada
      finalizo_ok
  */

    id_prog_intervencion: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    id_int_preventiva: {
      type: DataTypes.INTEGER
    },
    id_tarea_programada: {
      type: DataTypes.INTEGER
    },
    finalizo_ok: {
      type: DataTypes.BOOLEAN
    }
}

//Model nos da varios metodos (como, findAll, destroy, etc.) y vincula el modelo Parada_maquina con la instancia "sequelize"
class ProgramaIntervenciones extends Model{

  /*Al usar init debemos pasarle en el objeto de configuracion la conexion
a la base de datos "sequelize". Asi queda vinculado con Model.*/

  static config(sequelize){
      return {
        sequelize,
        tableName: PROG_INTERV_TABLA,
        modelName: 'ProgramaIntervenciones',
        timestamps: false
      }
    }
};


module.exports = {ProgramaIntervenciones, PROG_INTERV_TABLA, progIntervSchema};
