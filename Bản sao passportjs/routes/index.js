var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var User = require('../models/user');
var Admin = require('../models/admin');
var Product = require('../models/product');
var Order = require('../models/order');
/* GET home page. */
router.get('/alithea', function(req, res, next) {
  res.render('home', { title: 'Homepage' });
});

router.get('/alithea/service', function(req, res, next) {
	res.render('service', { title: 'Servie page' });
	});

	router.get('/alithea/aboutus', function(req, res, next) {
		res.render('about', { title: 'About us page' });
		});
	
router.get('/alithea/contact', function(req, res, next) {
		res.render('contact', { title: 'Contact page' });
		});
module.exports = router;

