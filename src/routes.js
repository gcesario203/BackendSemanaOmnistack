const express = require('express');
const OngController = require('./controller/OngController')
const IncidentController = require('./controller/IncidentsController')
const ProfileController = require('./controller/ProfileController')
const SessionController = require('./controller/SessionController')
const {celebrate,Segments,Joi}= require('celebrate')
const routes = express.Router();

routes.post('/sessions', SessionController.create)


//validação de envio de dados(corpo)
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name:Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp:Joi.string().required().min(10).max(11),
        city:Joi.string().required(),
        uf:Joi.string().required().min(2).max(2),
    })
}),OngController.create);

routes.get('/ongs',OngController.index);

routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),

    [Segments.BODY]: Joi.object().keys({
        title:Joi.string().required(),
        description:Joi.required(),
        value:Joi.number().required()
    })
}),IncidentController.create)


//Validação de paginação
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}),IncidentController.list)

//Validação de iD pela url
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}),IncidentController.delete)


//Validação de autorização 
routes.get('/profile' , celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index) 

module.exports = routes;
