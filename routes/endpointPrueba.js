const express = require('express')
const rutaPrueba = express.Router();

rutaPrueba.get('/', (req, res)=>{
  res.send(`Se accedió correctamenta a la ruta`)
})

rutaPrueba.post('/', (req, res)=>{
  const contenido = req.body;
  res.json({
    message: 'created',
    data: contenido
  })
})

module.exports = rutaPrueba;
