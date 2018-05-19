const express = require('express');
const mainController = require('./controllers/mainController');

const app = express();

module.exports = app
  .set('port', process.env.PORT || 4000)
  .use(mainController);
