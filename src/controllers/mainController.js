const express = require('express');
const getPage = require('./getPage');
const postPage = require('./postPage');

const Router = express.Router();

module.exports = Router
  .get('/', getPage)
  .post('/', postPage);
