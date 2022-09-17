const express = require('express');
const app = express();
const routes = require('../routes/index');
const cors = require('cors');

app.use(cors());
app.use(require('./middleware'))
app.use(routes)




module.exports = app;