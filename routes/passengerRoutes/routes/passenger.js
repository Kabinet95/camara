var express = require('express');
var router = express.Router();

/*
  main link
  /api/passenger
*/

/*
  /api/passenger/home
*/
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Passenger Home' });
});

module.exports = router;
