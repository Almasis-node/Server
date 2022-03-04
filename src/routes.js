const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');

const routes = express.Router();

routes.post('/usuarios', UsuarioController.store);
routes.get('/usuarios', UsuarioController.index);
routes.get('/usuarios/:user_id', UsuarioController.indexOne);
routes.put('/usuarios/:user_id', UsuarioController.update);
routes.delete('/usuarios/:user_id', UsuarioController.delete);

module.exports = routes;