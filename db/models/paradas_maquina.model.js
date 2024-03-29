const {DataTypes, Model, Sequelize} = require('sequelize');

//Defino el nombre de la tabla para poder usarla como argumento al usar queryInterface

const PARADAS_TABLA = 'paradas_maquina';


const paradasSchema = {
  /*Se especifican las columnas de la tabla:
      id_parada
      fecha_parada
      hora_parada
      id_maquina
      id_puesta_marcha */

    id_parada: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    fecha_hora_parada:{
      type: DataTypes.DATE,
      allowNull: false,
      set(value){
        this.setDataValue('fecha_hora_parada', Sequelize.fn('TO_TIMESTAMP', value, 'YYYY-MM-DD HH24:MI'));
      }
    },
    id_maquina: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        is: {
          args: /^\w{3}-\d{3}$/,
          msg: "El formato permitido es 'www-ddd'. Por ejemplo: API-001"}}
    },
    id_puesta_marcha: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
}

//Model nos da varios metodos (como, findAll, destroy, etc.) y vincula el modelo Parada_maquina con la instancia "sequelize"
class ParadaMaquina extends Model{

  /*Al usar init debemos pasarle en el objeto de configuracion la conexion
a la base de datos "sequelize". Asi queda vinculado con Model.*/

  static config(sequelize){
      return {
        sequelize,
        tableName: PARADAS_TABLA,
        modelName: 'ParadaMaquina',
        timestamps: false
      }
    }
};


module.exports = {ParadaMaquina, PARADAS_TABLA, paradasSchema};

