const express = require('express');
const enrutador_int_preventivas = express.Router();





//Este manejador tiene que traer todas las intervenciones preventivas
enrutador_int_preventivas.get('/', (req, res)=>{
  res.json({
    fecha_hora_lanzamiento: '14/05/2024 13:45',
    maquina: 'Anayak',
    estado: 'Lanzada',
    tareas: [{
      tipo_tarea: 'inspeccionar',
      componente: 'correa de distribucion',//Ver si no seria mejor incluir "codigo" y "descripcion"
      completada: 'false'
    },{
      tipo_tarea: 'cambiar',
      componente: 'filtro',
      completada: 'true'
    }],


     //En mi opinion no deberia aclarar el consumo ya que esta definido en cada tarea
        //si la tarea se completo deberia haber usado el recurso asociado a ella
      //Dejamos esta propiedad para el uso de recursos adicionales a los ya definidos
        //para las tareas
    consumo_rep_insumos_adicionales: [{
      id_rep_insumo: 2344,
      denominacion: 'filtro',
      cantidad: 1,
      unidad_medida: 'unidad'
    }],
    fecha_parada:'14/05/2024',
    hora_parada: '13:45',
    interrupciones:[{
      id_interrupcion: 123,
      fecha_inicio: '14/05/2024',
      hora_inicio: '17:45',
      motivo: 'Almuerzo',
      fecha_fin: '14/05/2024',
      hora_fin: '18:45',
    }],
    otras_tareas_preventivas: [
      'se encero rodamiento conico',
    'se limpio cadena de dsitribucion'],
    fecha_puesta_marcha: '15/05/2024',
    hora_puesta_marcha: '01:00'
  })
});


module.exports = enrutador_int_preventivas;
