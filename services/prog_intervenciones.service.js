const boom  = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class servicioProgIntervencion{

  async nuevoProgInter(datos){
    const nuevoProgIntervencion = await models.ProgramaIntervenciones.create(datos);
    if (!nuevoProgIntervencion){
      throw boom.badImplementation('Error al cargar la nueva relacion programa_intervencion');
    }else{
      return nuevoProgIntervencion;
    }
  };

  async listarProgIntervenciones(){
    const progIntervenciones = await models.ProgramaIntervenciones.findAll();
    if (!progIntervenciones){
      throw boom.badImplementation('Error en el servidor al intentar listas relaciones programa_intervencion');
    }else{
      return progIntervenciones;
    }
  };

  async encontrarProgIntervencion(id){
    const rta = await models.ProgramaIntervenciones.findByPk(id);
    if(!rta){
      throw boom.notFound('No se encontro la relacion programa_intervencion buscada');
    }else{
      return rta;
    }
  };

  async actualizarProgIntervencion(id, cambios){
    const relacionActual = await this.encontrarProgIntervencion(id);
    const rta = await relacionActual.update(cambios);
    if(!rta){
      throw boom.badImplementation('No se pudo actualizar la relacion programa_intervencion seleccionada');
    }else{
      return rta;
    }
  };

  async eliminarProgIntervencion(id){
    const relacionParaEliminar = await this.encontrarProgIntervencion(id);
    const relacionEliminada = await relacionParaEliminar.destroy();

    if(!relacionEliminada){
      throw boom.badImplementation('No se pudo eliminar la relacion programa_intervencion elegida');
    }else{
      return relacionParaEliminar.dataValues;
    }
  };
};


module.exports = servicioProgIntervencion;
