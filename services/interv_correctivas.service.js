const boom  = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class servicioIntervCorrectivas{

  async nuevaInterv(datosIntervencion){
    const nuevaIntervencion = await models.InterCorrectivas.create(datosIntervencion);
    if (!nuevaIntervencion){
      throw boom.badImplementation('Error al cargar la nueva intervencion correctiva');
    }else{
      return nuevaIntervencion;
    }
  };

  async listarIntervenciones(){
    const intervenciones = await models.InterCorrectivas.findAll();
    if (!intervenciones){
      throw boom.badImplementation('Error en el servidor al intentar listas las intervenciones correctivas');
    }else{
      return intervenciones;
    }
  };

  async encontrarIntervencion(idIntervencion){
    const rta = await models.InterCorrectivas.findByPk(idIntervencion);
    if(!rta){
      throw boom.notFound('No se encontro la intervencion correctiva buscada');
    }else{
      return rta;
    }
  };

  async actualizarIntervencion(idIntervencion, cambios){
    const intervencionActual = await this.encontrarIntervencion(idIntervencion);
    const rta = await intervencionActual.update(cambios);
    if(!rta){
      throw boom.badImplementation('No se pudo actualizar la intervencion correctiva seleccionada');
    }else{
      return rta;
    }
  };

  async eliminarIntervencion(idIntervencion){
    const intervencionParaEliminar = await this.encontrarIntervencion(idIntervencion);
    const intervencionEliminada = await intervencionParaEliminar.destroy();

    if(!intervencionEliminada){
      throw boom.badImplementation('No se pudo eliminar la intervencion correctiva elegida');
    }else{
      return intervencionParaEliminar.dataValues;
    }
  };
};


module.exports = servicioIntervCorrectivas;

