const joi = require('joi');

const esquema_id_Parada = joi.number().integer().required();
const esquema_fecha = joi.string().pattern(/^\d{2}-\d{2}-\d{4}$/);
const esquema_hora = joi.string().pattern(/^\d{2}:\d{2}$/);
const esquema_cod_maq = joi.string().pattern(/^[a-zA-Z]{3}-\d{3}$/);

const post_esquema_parada = joi.object({
  id_maquina: esquema_cod_maq.required(),
  id_puesta_marcha: joi.number().integer(),
  fecha_hora_parada: joi.string().pattern(/^\d{4}-\d{2}-\d{2} \d{1,2}:\d{1,2}$/)
})

const get_esquema_parada = joi.object({
  id_parada: esquema_id_Parada
})

const patch_esquema_parada = joi.object({
  fecha_parada: esquema_fecha,
  hora_parada: esquema_hora,
  id_maquina: esquema_cod_maq,
  id_puesta_marcha: joi.number().integer()
})

//Faltan definir los esquemas para verificar los IDs
module.exports = {post_esquema_parada, get_esquema_parada, patch_esquema_parada};

