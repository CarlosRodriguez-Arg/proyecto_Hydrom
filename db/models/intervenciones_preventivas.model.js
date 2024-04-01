
const {DataTypes, Model} = require('sequelize');

const PREVENTIVAS_TABLA = 'intervenciones_preventivas';


const interPreventivaSchema = {
  /*Se especifican las columnas de la tabla:
      id_int_preventiva
      id_parada
      otras_tareas
      problemas_potenciales*/

    id_int_preventiva: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    id_parada:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    otras_tareas: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    problemas_potenciales: {
      type: DataTypes.TEXT,
      allowNull: true
    }
}

//Model nos da varios metodos (como, findAll, destroy, etc.) y vincula el modelo Parada_maquina con la instancia "sequelize"
class InterPreventivas extends Model{

  /*Al usar init debemos pasarle en el objeto de configuracion la conexion
a la base de datos "sequelize". Asi queda vinculado con Model.*/

  static config(sequelize){
      return {
        sequelize,
        tableName: PREVENTIVAS_TABLA,
        modelName: 'InterPreventivas',
        timestamps: false
      }
    }
};


module.exports = {InterPreventivas, PREVENTIVAS_TABLA, interPreventivaSchema};
