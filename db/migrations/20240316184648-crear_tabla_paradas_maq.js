'use strict';
const {PARADAS_TABLA, paradasSchema} = require('../models/paradas_maquina.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PARADAS_TABLA, paradasSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PARADAS_TABLA);
  }
};

