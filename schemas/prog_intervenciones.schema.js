//IMPORTS

const joi = require('joi');


/*
  Se especifican las columnas de la tabla:
  id_prog_intervencion
  id_int_preventiva
  id_tarea_programada
  finalizo_ok
*/


const post_esquema_prog_intervenciones = joi.object({
  id_int_preventiva: joi.number().integer(),
  id_tarea_programada: joi.number().integer(),
  finalizo_ok: joi.boolean(),
});


const get_esquema_prog_intervenciones = joi.object({
  id_prog_intervencion: joi.number().integer().required()
})


const patch_esquema_prog_intervenciones = joi.object({
  id_int_preventiva: joi.number().integer(),
  id_tarea_programada: joi.number().integer(),
  finalizo_ok: joi.boolean(),
})


module.exports = {post_esquema_prog_intervenciones, get_esquema_prog_intervenciones, patch_esquema_prog_intervenciones};
