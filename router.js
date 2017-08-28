var express = require('express');
var Router = express.Router();

var IndexController = require('./controllers/IndexController');
var LoginController = require('./controllers/LoginController');
var PersonController = require('./controllers/PersonController');

Router.get('/', IndexController.index);
Router.get('/index', IndexController.index);

Router.get('/login', LoginController.login);//显示登陆页面
Router.post('/dologin', LoginController.dologin);//实现登陆

Router.get('/register', LoginController.register);//显示注册页面
Router.post('/doregister', LoginController.doregister);//实现注册

Router.get('/person', PersonController.person);

module.exports = Router;