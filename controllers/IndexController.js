var personModel = require('../models/personModel');




var IndexController = {};

IndexController.index = function(req, res, next) {
	personModel.findAllUser(function(data) {
		console.log(data);
		res.render('index');
	});

}




module.exports = IndexController;