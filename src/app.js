const express = require('express');
const app = express();
const porta = 3333;
const {errors} = require('celebrate')
const cors = require('cors')
const routes = require('./routes.js')

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

module.exports = app

console.log("Servidor rodando na porta "+ porta)