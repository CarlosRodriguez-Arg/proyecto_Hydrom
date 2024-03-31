//IMPORTAMOS EL MODELO DE PARADAS_MAQUINA
const boom  = require('@hapi/boom');
const {models} = require('../libs/sequelize');


//DEFINIMOS LOS SERVICIOS PARA LAS PARADAS DE MAQUINA

class servicioParadas{

  async nuevaParada(parada){
    const registro_parada = await models.ParadaMaquina.create(parada);
    if (!registro_parada){
      throw boom.badImplementation('Error al cargar la nueva parada de maquina');
    }else{
      return registro_parada;
    }
  };

  async listarParadas(){
    const rta = await models.ParadaMaquina.findAll();
    if (!rta){
      throw boom.badImplementation('Error en el servidor al intentar listas las paradas de maquina');
    }else{
      return rta;
    }
  };

  async encontrarParada(idParada){
    const rta = await models.ParadaMaquina.findByPk(idParada);
    if(!rta){
      throw boom.notFound('No se encontro la parada buscada');
    }else{
      return rta;
    }
  };

  async actualizarParada(idParada, cambios){
    const paradaActual = await this.encontrarParada(idParada);
    const rta = await paradaActual.update(cambios);
    if(!rta){
      throw boom.badImplementation('No se pudo actualizar la parada seleccionada');
    }else{
      return rta;
    }
  };

  async eliminarParada(idParada){
    const paradaParaEliminar = await this.encontrarParada(idParada);
    const paradaEliminada = await paradaParaEliminar.destroy();

    if(!paradaEliminada){
      throw boom.badImplementation('No se pudo eliminar la parada de maquina elegida');
    }else{
      return paradaParaEliminar.dataValues;
    }
  };

}


module.exports = servicioParadas;
