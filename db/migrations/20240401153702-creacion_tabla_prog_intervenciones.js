'use strict';

//IMPORTS

const {PROG_INTERV_TABLA, progIntervSchema} = require('../models/programa_intervenciones.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PROG_INTERV_TABLA, progIntervSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PROG_INTERV_TABLA);
  }

};


