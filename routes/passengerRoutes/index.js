var express = require('express').Router();

const passenger = require('./routes/passenger')
/* GET home page. */
express.use('/link', passenger);
module.exports = express;
