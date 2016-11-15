// ==================================================================================
// dependencies
// ==================================================================================

// require express
var express = require('express');
// initiate router
var router = express.Router();

// require the burger.js file
// var Project = require('../models/Project.js');
var Project = require('../models')["Project"];

// ==================================================================================
// ROUTES
// ==================================================================================

router.get('/', function (req, res) {
	res.render('index');
});

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
})
// export router
module.exports = router;