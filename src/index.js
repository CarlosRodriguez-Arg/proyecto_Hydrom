//IMPORTS

const express = require('express');
const rutasApi = require('../routes/index');
const {erroresBoom, errorJs} = require('../middlewares/manejadores_error');
const cors = require('cors');

//APP EXPRESS

const app = express();


//PORT CONFIGURATION

const puerto = process.env.PORT || 3000;


//REQUEST HANDLER

app.use(express.json());


//DEFINIMOS LOS ORIGENES PERMITIDOS PARA ACCEDER A LA API

let whiteList = ['http://127.0.0.1:5500', 'http://localhost:8080'];

const options = {
  origin: (origin, callback)=>{
    if(whiteList.includes(origin)){
      callback(null, true);
    }else{
      callback(new Error('Acceso denegado por politica de CORS'));
    }
  }
}


//INGREMAOS A LAS RUTAS

rutasApi(app);


//MANEJAMOS EL PROBLEMA DE CORS
// IMPORTANTE!! --> APP.USE(CORS(OPTIONS)) DEBE ESTAR DESPUES DE LAS RUTAS, SINO BLOQUEA TODO

app.use(cors(options));

//MIDDLEWARES PARA MANEJO DE ERRORES

app.use(erroresBoom);
app.use(errorJs);


//LOCALHOST

app.listen(puerto, ()=>{
  console.log(`Escuchando puerto: http://localhost:${puerto}`)
});


