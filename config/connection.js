// setup connection between node and mysql db
var mysql = require('mysql');

// create connection to mysql
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'portfolio_db'
	});
};

// connect to mysql connection
connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// export connection
module.exports = connection;