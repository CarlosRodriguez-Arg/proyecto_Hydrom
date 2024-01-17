const express = require('express');
const app = express();
const puerto = process.env.PORT || 3000;

const rutasApi = require('../routes/index');

app.use(express.json());

rutasApi(app);

app.listen(puerto, ()=>{
  console.log(`Escuchando puerto: http://localhost:${puerto}`)
});


