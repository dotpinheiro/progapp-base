const express = require('express');
const routes = require('./routes');

const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routes);
app.use('/', router);

module.exports = app;
