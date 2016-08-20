'use strict';


function HeaderParser () {

	this.whoami = function (req, res) {
		var userInfo = {ipaddress:'',language:'',software:''};

		var acceptLanguageString = req.get('accept-language');
		var languageComma = acceptLanguageString.indexOf(',');
		var userLanguage = acceptLanguageString.substring(0, languageComma);

		var userAgentString = req.get('user-agent');
		var openParens = userAgentString.indexOf('(') + 1; // Skip the parens
		var closeParens = userAgentString.indexOf(')');
		var operatingSystem = userAgentString.substring(openParens,closeParens);

		userInfo.ipaddress = req.get('x-forwarded-for');
		userInfo.language = userLanguage;
		userInfo.software = operatingSystem;

		res.json(userInfo);
	};
}

module.exports = HeaderParser;
