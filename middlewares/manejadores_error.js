      //MIDDLEWARES PARA MANEJO DE ERRRORES

        //PARA ERRORES TIPO BOOM

function erroresBoom (err, req, res, next){
  if (err.isBoom){
    res.status(err.output.statusCode).json(err.output.payload);
  }else{
    next(err);
  }
};


    //PARA ERRORES EXPRESS Y OTROS

function errorJs(err, req, res, next){
  if (typeof(err) === 'object'){
    // console.log(err);
    res.status(404).json({
      message: err.message,
      traceback: err.stack
    });
    }else{
    res.json(err);
  }
}

      //EXPORTAMOS EL MODDLEWARE

module.exports = {erroresBoom, errorJs};

