const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');

const routes = express.Router();

routes.post('/usuarios', UsuarioController.store);

module.exports = routes;