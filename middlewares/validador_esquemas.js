//IMPORTS

const boom = require('@hapi/boom');


//Retorna un middleware configurado con los parámetros: esquema y propiedad

function generador_validador(esquema, propiedad){
  return function(req, res, next){
    const dato = req[propiedad];
    const {error} = esquema.validate(dato);
    if(!error){
      next();
    }else{
      next(boom.badRequest(error));
    }
  }
}


//EXPORTS

module.exports = {generador_validador};   //Siempre que usemos las llaves al exportar, debemos incluirlas tambien al importar
                                          //Tambien hay que usar el mismo nombre
