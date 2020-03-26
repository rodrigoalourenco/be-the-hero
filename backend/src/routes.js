const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.findAll);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.findAll);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.findIncidentsByOng);

routes.post('/session', SessionController.create);



module.exports = routes;