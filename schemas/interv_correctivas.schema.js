const joi = require('joi');

const fecha_hora = joi.string().pattern(/^\d{4}-\d{2}-\d{2} \d{1,2}:\d{1,2}$/);
const texto = joi.string();

/*    id_int_correctiva
      id_parada
      fecha_hora_solicitud
      fecha_hora_inicio_inter
      descripcion_falla
      posibles_causas
      acciones_correctivas
      fecha_hora_entrega
*/

const post_esquema_correctiva = joi.object({

  id_parada: joi.number().integer(),
  fecha_hora_solicitud: fecha_hora,
  fecha_hora_inicio_inter: fecha_hora,
  descripcion_falla: texto,
  posibles_causas: texto,
  acciones_correctivas: texto,
  fecha_hora_entrega: fecha_hora
});

const get_esquema_correctiva = joi.object({

  id_int_correctiva: joi.number().integer().required()
});

const patch_esquema_correctiva = joi.object({
  id_int_correctiva: joi.number().integer().required(),
  id_parada: joi.number().integer(),
  fecha_hora_solicitud: fecha_hora,
  fecha_hora_inicio_inter: fecha_hora,
  descripcion_falla: texto,
  posibles_causas: texto,
  acciones_correctivas: texto,
  fecha_hora_entrega: fecha_hora
})


module.exports = {post_esquema_correctiva, get_esquema_correctiva, patch_esquema_correctiva};
