'use strict';


function HeaderParser () {

	this.whoami = function (req, res) {

				res.json("hi");
	};
}

module.exports = HeaderParser;
