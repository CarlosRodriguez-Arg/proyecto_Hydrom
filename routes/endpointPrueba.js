const express = require('express')
const rutaPrueba = express.Router();

rutaPrueba.get('/', (req, res)=>{
  res.send(`Respuesta: ${res}`)
})

module.exports = rutaPrueba;
