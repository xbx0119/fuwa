var personModel = require("../models/personModel");

var PersonController = {};

//显示页面
PersonController.person = function(req, res, next) {

	var resData = {
		code: 0,
		data: {}
	}

	personModel.findAllUser(function(data) {
		resData.data = data.data;
		res.render('Person/person', resData);
	})
}


module.exports = PersonController;