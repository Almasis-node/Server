const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Cargo = require('../models/Cargo');
const Divergencia = require('../models/Divergencia');
const Local = require('../models/Local');
const Produto = require('../models/Produto');
const Reserva = require('../models/Reserva');
const Usuario = require('../models/Usuario');

const connection = new Sequelize(dbConfig);

Cargo.init(connection);
Divergencia.init(connection);
Local.init(connection);
Produto.init(connection);
Reserva.init(connection);
Usuario.init(connection);

Cargo.associate(connection.models);
Divergencia.associate(connection.models);
Local.associate(connection.models);
Produto.associate(connection.models);
Reserva.associate(connection.models);
Usuario.associate(connection.models);

module.exports = connection;