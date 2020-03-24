const express = require('express');
const routes = express.Router();

routes.post('/contato', (req,res,next)=>{
    const params = req.body;

    console.log(params)
    res.json({
        nome:"gabriel",
        idade:22,
        email:"cesario203@outlook.com"
    })
})

module.exports = routes;
