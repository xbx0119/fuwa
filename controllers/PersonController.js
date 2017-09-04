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

//显示添加用户页面
PersonController.addperson = function(req, res, next) {
	res.render('Person/addperson');
}

//实现注册
PersonController.doaddperson = function(req, res, next) {
	var id = req.body.id;
	var name = req.body.name;
	var passwd = req.body.passwd;
	var account = req.body.account;

	personModel.insertUser(id, name, passwd, account, function(resData) {
		if (resData.data.length !== 0) {
			res.redirect('/person');
		}else {
			res.redirect('/addperson');
		}
	});
}

module.exports = PersonController;