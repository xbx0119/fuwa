var personModel = require('../models/personModel');

var LoginController = {};

//显示登陆页面
LoginController.login = function (req, res, next) {
	// var resData = {
	// 	code: 0,
	// 	data: {}
	// }
	// personModel.findAllUser(function(data){
	// 	resData.data = data.data;
	// 	res.render('Login/login', resData);
	// })
	personModel.findAllUser(function(data) {
		res.render('Login/login');
	});
 }

//实现登陆
LoginController.dologin = function(req, res, next) {
	var name = req.body.name;
	var passwd = req.body.passwd;


	// 
	personModel.findUser(name, passwd, function(resData) {
		if(resData.code != 0) {
			req.session.user = resData.data.name;
			console.log(req.session.user);
			res.redirect('/index');
		}else {
			res.redirect('/login');
		}
	});
}

//显示注册页面
LoginController.register = function(req, res, next) {
	res.render('Login/register');
}

//实现注册
LoginController.doregister = function(req, res, next) {
	var id = req.body.id;
	var name = req.body.name;
	var passwd = req.body.passwd;
	var account = req.body.account;

	personModel.insertUser(id, name, passwd, account, function(resData) {
		if (resData.data.length !== 0) {
			res.redirect('/login');
		}else {
			res.redirect('/register');
		}
	});
}


module.exports = LoginController;
