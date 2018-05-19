const express = require('express');
const getPage = require('./getPage');

const Router = express.Router();

module.exports = Router
  .get('/', getPage);
