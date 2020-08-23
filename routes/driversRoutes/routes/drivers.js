var express = require('express');
var router = express.Router();

/*
  main link
  /api/drivers
*/


/* 
  GET home page. 
  /api/drivers/link/home 
*/
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Drivers Home' });
});

/* 
  GET Auth page. 
  /api/drivers/link/auth 
*/
router.get('/auth', function(req, res, next) {
  res.render('drivers/auth/loginForm', { title: 'Please sign in' });
});

/* 
  GET Auth page. 
  /api/drivers/link/create-new-driver 
*/
router.get('/create-new-driver', function(req, res, next) {
  res.render('drivers/auth/createForm', { title: 'Please sign in' });
});


module.exports = router;