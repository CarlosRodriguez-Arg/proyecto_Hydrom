      //IMPORTS
const express = require('express');


      //ROUTER
const enrutador_int_correctivas = express.Router();


      //ROUTE HANDLER: GET

enrutador_int_correctivas.get('/', (req, res)=>{

  res.json({                                         //Envio de respuesta falsa para probar manejador
    fecha_parada: '14/05/2024',                     //en teoria deberia traer todos estos datos la peticion
    hora_parada: '13:45',
    maquina: 'Anayak',
    fecha_solicitud_rep: '14/05/2024',
    hora_solicitud_rep: '14:00',
    fecha_intervencion_rep: '14/05/2024',
    hora_intervencion_rep: '15:00',
    descripcion_falla: 'Radiador averiado',
    posibles_causas: 'sobrecalentamiento exesivo por falta de liquido refrigerante',
    tipo_falla: 'Hidraulica',
    acciones_corr: 'se reemplaza radiador',
    consumo_rep_insumos: ['radiador', 'refrigerante', 'manguera'],
    interrupciones: [{
      id_interrupcion: 123,
      fecha_inicio: '14/05/2024',
      hora_inicio: '17:45',
      motivo: 'Almuerzo',
      fecha_fin: '14/05/2024',
      hora_fin: '18:45',
    },
    {
      id_interrupcion: 124,
      fecha_inicio: '14/05/2024',
      hora_inicio: '19:45',
      motivo: 'Reparacion amoladora',
      fecha_fin: '14/05/2024',
      hora_fin: '20:30',
    }],
    fecha_entrega: '14/05/2024',
    hora_entrega: '21:30'
  })
})


      //EXPORT

module.exports = enrutador_int_correctivas;
