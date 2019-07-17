const express = require('express');
const app = express();
const Usuario = require('../models/usuario')



app.use(require('./usuario'));
app.use(require('./login'));


module.exports = app;