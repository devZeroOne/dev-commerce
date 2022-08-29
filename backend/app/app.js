const express = require('express');
const app = express();
const routes = require('../routes/index');

app.use(require('./middleware'))
app.use(routes)



module.exports = app;