//IMPORTAMOS EL MODELO DE PARADAS_MAQUINA
const {models} = require('../libs/sequelize');


class servicioParadas{

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
  };

  async nuevaParada(parada){
    const registro_parada = await models.ParadaMaquina.create(parada);
    return registro_parada;
  };

  async listarParadas(){
    const rta = await models.ParadaMaquina.findAll();
    return rta;
  }

  async encontrarParada(idParada){
    const rta = await models.ParadaMaquina.findByPk(idParada);
    return rta;
  }
  async actualizarParada(idParada, cambios){
    const paradaActual = this.encontrarParada(idParada);
    const rta = paradaActual.update(cambios);
    return rta;
  }
};


module.exports = servicioParadas;
