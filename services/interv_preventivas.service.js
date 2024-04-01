const boom  = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class servicioIntervPreventivas{

  async nuevaInterv(datosIntervencion){
    const nuevaIntervencion = await models.InterPreventivas.create(datosIntervencion);
    if (!nuevaIntervencion){
      throw boom.badImplementation('Error al cargar la nueva intervencion preventiva');
    }else{
      return nuevaIntervencion;
    }
  };

  async listarIntervenciones(){
    const intervenciones = await models.InterPreventivas.findAll();
    if (!intervenciones){
      throw boom.badImplementation('Error en el servidor al intentar listas las intervenciones preventivas');
    }else{
      return intervenciones;
    }
  };

  async encontrarIntervencion(idIntervencion){
    const rta = await models.InterPreventivas.findByPk(idIntervencion);
    if(!rta){
      throw boom.notFound('No se encontro la intervencion preventiva buscada');
    }else{
      return rta;
    }
  };

  async actualizarIntervencion(idIntervencion, cambios){
    const intervencionActual = await this.encontrarIntervencion(idIntervencion);
    const rta = await intervencionActual.update(cambios);
    if(!rta){
      throw boom.badImplementation('No se pudo actualizar la intervencion preventiva seleccionada');
    }else{
      return rta;
    }
  };

  async eliminarIntervencion(idIntervencion){
    const intervencionParaEliminar = await this.encontrarIntervencion(idIntervencion);
    const intervencionEliminada = await intervencionParaEliminar.destroy();

    if(!intervencionEliminada){
      throw boom.badImplementation('No se pudo eliminar la intervencion preventiva elegida');
    }else{
      return intervencionParaEliminar.dataValues;
    }
  };
};


module.exports = servicioIntervPreventivas;
