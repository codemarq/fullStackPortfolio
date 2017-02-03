// ============================================================================
// dependencies
// ============================================================================
// require express
var express = require('express');
// initiate router
var router = express.Router();

// require the burger.js file
// var Project = require('../models/Project.js');
var Project = require('../models')["Project"];

// ============================================================================
// ROUTES
// ============================================================================

// Index Route
router.get('/', function (req, res) {
	res.render('index');
});

// Portfolio Route
router.get('/portfolio', function(req, res) {
	// var portfolio = 'https://github.com/codemarq'
	// res.render('portfolio');

	Project.findAll({}).then(function (data) {

		var portfolioObject = {
			project: data
		};

		// console.log(portfolioObject);
		res.render('portfolio', {project: data});
	});
});

// Contact page route
router.get('/contact', function(req, res) {
	res.render('contact');
});

// Contact-Send Message route
router.post('/send', function (req, res) {

});

// export router
module.exports = router;
