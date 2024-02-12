class Paradas_maquina{

  constructor({
    id_parada,
    fecha_parada,
    hora_parada,
    maquina,
    tiempo_parada,
    fecha_puesta_marcha,
    hora_puesta_marcha,
    tipo_intervencion,
  }){
    this.id_parada = id_parada,
    this.fecha_parada = fecha_parada,
    this.hora_parada = hora_parada,
    this.maquina = maquina,
    this.tiempo_parada = tiempo_parada,
    this.fecha_puesta_marcha = fecha_puesta_marcha,
    this.hora_puesta_marcha = hora_puesta_marcha,
    this.tipo_intervencion = tipo_intervencion
  }
}

let paradas = [];

for (let index = 0; index < 11; index++) {
  paradas.push(new Paradas_maquina({
    id_parada:index,
    fecha_parada : '24/02/2024',
    hora_parada : '13:45',
    maquina : 'Anayak',
    tiempo_parada : '2:45',
    fecha_puesta_marcha : '25/02/2024',
    hora_puesta_marcha : '01:00',
    tipo_intervencion: 'Preventiva'
  }))
}

module.exports = paradas;
