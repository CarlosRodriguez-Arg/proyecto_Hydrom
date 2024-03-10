const {DataTypes, Model} = require('sequelize');

//Defino el nombre de la tabla para poder usarla como argumento en las migraciones

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
      primaryKey: true,
      autoIncrement: true},
    fecha_parada: {
      type: DataTypes.DATEONLY,
      allowNull: false},
    hora_parada: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        is:{
          args: /^\d\d:\d\d$/,
          msg: "Solo se permite el formato de hora 'dd:dd'. Por ejemplo: 03:30"}}},
    id_maquina: {
      type: DataTypes.INTEGER,
      allowNull: false},
    id_puesta_marcha: {
      type: DataTypes.INTEGER,
      allowNull: true}
}

//Model nos da varios metodos (como, findAll) y vincula el modelo Parada_maquina con el instancia "sequelize"
class Parada_maquina extends Model{

  /*Al usar init debemos pasarle en el objeto de configuracion la conexion
a la base de datos "sequelize". Asi queda vinculado con Model.*/

static config(sequelize){
    return {
      sequelize,
      tableName: PARADAS_TABLA,
      modelName: 'Parada_maquina',
      timestamps: false
    }
  }
};


module.exports = {Parada_maquina, PARADAS_TABLA, paradasSchema};

