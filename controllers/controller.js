// ==================================================================================
// dependencies
// ==================================================================================

// require express
var express = require('express');
// initiate router
var router = express.Router();

// require the burger.js file
var burger = require('../models/portfolio.js');

// ==================================================================================
// ROUTES
// ==================================================================================

router.get('/', function (req, res) {
	res.redirect('/index');
});

// route to handle select all
router.get('/index', function (req, res) {
	burger.selectAll(function (data) {

		var hbsObject = { 
			burgers: data
		};

		// console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.get('/portfolio', function(req, res) {
	var portfolio = 'https://github.com/codemarq'
	res.redirect(portfolio);
})
// export router
module.exports = router;