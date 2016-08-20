'use strict';

var path = process.cwd();
var HeaderParser = require(path + '/app/controllers/headerParser.server.js');

module.exports = function (app) {

	var headerParser = new HeaderParser();

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/api/whoami')
		.get(headerParser.whoami)
};
