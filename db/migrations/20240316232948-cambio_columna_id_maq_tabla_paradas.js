'use strict';

const {PARADAS_TABLA} = require('../models/paradas_maquina.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      PARADAS_TABLA,
      'id_maquina',
      {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate:{
          is: {
            args: /^\w{3}-\d{3}$/,
            msg: "El formato permitido es 'www-ddd'. Por ejemplo: API-001"}}
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      PARADAS_TABLA,
      'id_maquina',
      {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        validate:{
          is: {
            args: /^\w{3}-\d{3}$/,
            msg: "El formato permitido es 'www-ddd'. Por ejemplo: API-001"}}
      }
    );
  }
};
