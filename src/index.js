const express = require('express');
const app = express();
const porta = 3333;
const routes = require('./routes.js')
const id = 0.00

app.use(express.json())
app.use(routes)
app.listen(porta);

console.log("Servidor rodando na porta "+ porta)