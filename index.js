const express = require('express');
const app = express();
const porta = 3333;

app.get('/contato', (req,res,next)=>{
    res.json({
        nome:"gabriel",
        idade:22,
        email:"cesario203@outlook.com"
    })
})

app.listen(porta);

console.log("Servidor rodando na porta "+ porta)