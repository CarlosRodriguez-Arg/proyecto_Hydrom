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


//MANEJAMOS LOS CORS

let whiteList = ['http://127.0.0.1:5500'];

const options = {
  origin: (origin, callback)=>{
    if(whiteList.includes(origin)){
      callback(null, true);
    }else{
      callback(new Error('Acceso denegado'));
    }
  }
}

app.use(cors(options));


//INGREMAOS A LAS RUTAS

rutasApi(app);


//MIDDLEWARES PARA MANEJO DE ERRORES

app.use(erroresBoom);
app.use(errorJs);


//LOCALHOST

app.listen(puerto, ()=>{
  console.log(`Escuchando puerto: http://localhost:${puerto}`)
});


