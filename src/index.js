      //IMPORTS

const express = require('express');
const rutasApi = require('../routes/index');


      //APP EXPRESS

const app = express();


      //PORT CONFIGURATION

const puerto = process.env.PORT || 3000;


      //REQUEST HANDLER

app.use(express.json());
rutasApi(app);


      //LOCALHOST

app.listen(puerto, ()=>{
  console.log(`Escuchando puerto: http://localhost:${puerto}`)
});


