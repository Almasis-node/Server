const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(6666);
console.log('Está rodando...');