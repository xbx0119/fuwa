var express = require('express');
var Router = express.Router();

var IndexController = require('./controllers/IndexController');
var LoginController = require('./controllers/LoginController');
var PersonController = require('./controllers/PersonController');
var StorageController = require('./controllers/StorageController');
var RoughProcessController = require('./controllers/RoughProcessController');
var DeepProcessController = require('./controllers/DeepProcessController');
var Trace = require('./controllers/Trace');

Router.get('/', IndexController.index);
Router.get('/index', IndexController.index);

Router.get('/login', LoginController.login);//显示登陆页面
Router.post('/dologin', LoginController.dologin);//实现登陆

Router.get('/register', LoginController.register);//显示注册页面
Router.post('/doregister', LoginController.doregister);//实现注册

Router.get('/person', PersonController.person);//显示人员管理页面

Router.get('/input', StorageController.input);//显示input页面
Router.get('/warehouse', StorageController.warehouse);//显示warehouse页面
Router.get('/output', StorageController.output);//显示output页面

Router.get('/feed', RoughProcessController.feed);//显示feed页面
Router.get('/feed2product', RoughProcessController.feed2product);//显示feed2product页面

Router.get('/material', DeepProcessController.material);
Router.get('/product', DeepProcessController.product);


Router.get('/trace/', Trace.index);
Router.post('/trace/trace', Trace.trace);

module.exports = Router;