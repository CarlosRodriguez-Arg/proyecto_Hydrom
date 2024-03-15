//IMPORTAMOS EL MODELO DE PARADAS_MAQUINA
const boom  = require('@hapi/boom');
const {models} = require('../libs/sequelize');


//DEFINIMOS LOS SERVICIOS PARA LAS PARADAS DE MAQUINA

class servicioParadas{

  async nuevaParada(parada){
    const registro_parada = await models.ParadaMaquina.create(parada);
    return registro_parada;
  };

  async listarParadas(){
    const rta = await models.ParadaMaquina.findAll();
    if (!rta){
      throw boom.badImplementation('Error en el servidor al intentar listas las paradas de maquina');
    }else{
      return rta;
    }
  }

  async encontrarParada(idParada){
    const rta = await models.ParadaMaquina.findByPk(idParada);
    if(!rta){
      throw boom.notFound('No se encontro la parada buscada');
    }else{
      return rta;
    }
  }

  async actualizarParada(idParada, cambios){
    const paradaActual = await this.encontrarParada(idParada);
    const rta = await paradaActual.update(cambios);
    return rta;
  }

  async eliminarParada(idParada){
    const paradaParaEliminar = await this.encontrarParada(idParada);
    const paradaEliminada = await paradaParaEliminar.destroy();
    return paradaEliminada;
  }
};


module.exports = servicioParadas;
