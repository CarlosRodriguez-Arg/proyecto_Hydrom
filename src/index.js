const express = require('express');
const rutasApi = require('../routes/index');

const app = express();

const puerto = process.env.PORT || 3000;

app.use(express.json());

rutasApi(app);


app.listen(puerto, ()=>{
  console.log(`Escuchando puerto: http://localhost:${puerto}`)
});


