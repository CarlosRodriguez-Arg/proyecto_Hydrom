const joi = require('joi');

const texto = joi.string();

/*
      id_int_preventiva
      id_parada
      otras_tareas
      problemas_potenciales
*/

const post_esquema_preventiva = joi.object({
  id_parada: joi.number().integer(),
  otras_tareas: texto,
  problemas_potenciales: texto
});


const get_esquema_preventiva = joi.object({
  id_int_preventiva: joi.number().integer().required()
})


const patch_esquema_preventiva = joi.object({
  id_parada: joi.number().integer(),
  otras_tareas: texto,
  problemas_potenciales: texto
})


module.exports = {post_esquema_preventiva, get_esquema_preventiva, patch_esquema_preventiva};

