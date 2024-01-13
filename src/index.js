const express = require('express');
const app = express();

const puerto = process.env.PORT || 3000;

app.listen(puerto, ()=>{
  console.log(`Escuchando puerto: http://localhost:${puerto}`)
});

app.get('/', (req,res)=>{
  res.send('Conectado al servidor')
});

