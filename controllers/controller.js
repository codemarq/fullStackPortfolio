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

// route to handle adding a new burger
router.post('/index/insert', function (req, res) {
	burger.insertOne(['project_name'], [req.body.project_name], function () {
		res.redirect('/index');
	});
});

// route to handle updating a burger (devouring it)
router.put('/projects/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	// console.log('condition', condition);

	// burger.updateOne({devoured: true}, condition, function () {
	// 	res.redirect('/index');
	// });
});

// export router
module.exports = router;