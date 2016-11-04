// ===============================================================================
// Portfolio model
// ===============================================================================

// require the ORM
var orm = require('../config/orm.js');

// create a portfolio object that incorporates the orm functions
var portfolio = {
	selectAll: function (cb) {
		orm.selectAll('projects', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	insertOne: function (cols, vals, cb) {
		orm.insertOne('projects', cols, vals, function (res) {
			cb(res);
		});
	},
	updateOne: function (objColVals, condition, cb) {
		orm.updateOne('projects', objColVals, condition, function (res) {
			cb(res);
		});
	}
};

// export portfolio
module.exports = portfolio;
