var express = require('express').Router();

const drivers = require('./routes/drivers')
/* GET home page. */
express.use('/link', drivers);
express.use('/auth', drivers);
module.exports = express;
