'use strict';
const {PARADAS_TABLA} = require('../models/paradas_maquina.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(PARADAS_TABLA, 'fecha_hora_parada',{
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
      set(value){
        this.setDataValue('fecha_hora_parada', Sequelize.fn('TO_TIMESTAMP', value, 'YYYY-MM-DD HH24:MI'));
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(PARADAS_TABLA, 'fecha_hora_parada');
  }
};

