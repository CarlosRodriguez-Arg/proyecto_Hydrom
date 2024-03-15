const joi = require('joi');

const esquema_fecha = joi.string().pattern(/^\d{2}-\d{2}-\d{4}$/);
const esquema_hora = joi.string().pattern(/^\d{2}:\d{2}$/);
const esquema_cod_maq = joi.string().pattern(/^[a-zA-Z]{3}-\d{3}$/);

const post_esquema_parada = joi.object({
  fecha_parada: esquema_fecha,
  hora_parada: esquema_hora,
  maquina: esquema_cod_maq,
  fecha_puesta_marcha: esquema_fecha,
  hora_puesta_marcha: esquema_hora,
  tipo_intervencion: joi.string().pattern(/correctiva|preventiva/).insensitive()
})


module.exports = {post_esquema_parada};
