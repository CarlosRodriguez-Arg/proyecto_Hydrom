'use strict';

const {INTERV_CORR_TABLA, interCorrSchema} = require('../models/intervenciones_correctivas.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(INTERV_CORR_TABLA, interCorrSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(INTERV_CORR_TABLA);
  }
};
