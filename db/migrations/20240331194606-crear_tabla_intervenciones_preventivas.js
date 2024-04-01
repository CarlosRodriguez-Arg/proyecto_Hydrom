'use strict';

const {PREVENTIVAS_TABLA, interPreventivaSchema} = require('../models/intervenciones_preventivas.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PREVENTIVAS_TABLA, interPreventivaSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PREVENTIVAS_TABLA);
  }
};
