// ==================================================================================
// dependencies
// ==================================================================================

// require express
var express = require('express');
// initiate router
var router = express.Router();

// require the burger.js file
var Project = require('../models/project.js');

// ==================================================================================
// ROUTES
// ==================================================================================

router.get('/', function (req, res) {
	res.render('/index');
});

// // route to handle select all
// router.get('/index', function (req, res) {
	
// });

router.get('/portfolio', function(req, res) {
	var portfolio = 'https://github.com/codemarq'
	res.render('portfolio');

	Project.findAll({}).then(function (data) {

		// var hbsObject = { 
		// 	burgers: data
		// };

		// console.log(hbsObject);
		res.render('portfolio', {project: data});
	});
})
// export router
module.exports = router;