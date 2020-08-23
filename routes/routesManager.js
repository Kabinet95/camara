var express = require('express')();

const driversRoutes = require('./driversRoutes/index')
const passengerRoutes = require('./passengerRoutes/index')

/* GET home page. */
express.use('/drivers/', driversRoutes);
express.use('/passengers/', passengerRoutes);
module.exports = express;
