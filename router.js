var express = require('express');
var Router = express.Router();

var IndexController = require('./controllers/IndexController');
var LoginController = require('./controllers/LoginController');
var PersonController = require('./controllers/PersonController');
var StorageController = require('./controllers/StorageController');
var RoughProcessController = require('./controllers/RoughProcessController');
var DeepProcessController = require('./controllers/DeepProcessController');
var SeedingController = require('./controllers/SeedingController');
var PlantController = require('./controllers/PlantController');

var getInfo = require('./api/getInfo');


var Trace = require('./controllers/Trace');




Router.get('/', IndexController.index);
Router.get('/index', IndexController.index);

Router.get('/login', LoginController.login);//显示登陆页面
Router.post('/dologin', LoginController.dologin);//实现登陆

Router.get('/register', LoginController.register);//显示注册页面
Router.post('/doregister', LoginController.doregister);//实现注册

Router.get('/person', PersonController.person);//显示人员管理页面
Router.get('/addperson', PersonController.addperson);//显示添加人员页面
Router.post('/doaddperson', PersonController.doaddperson);//实现添加用户

Router.get('/drug', SeedingController.drug);//显示drug页面
Router.get('/seedling', SeedingController.seedling);//显示seedling页面
Router.get('/seed', SeedingController.seed);//显示seed页面
Router.get('/seedsoakdrug', SeedingController.seedsoakdrug);//显示seedsoakdrug页面
Router.get('/seedlingspraydrug', SeedingController.seedlingspraydrug);//显示seedspraydrug页面

Router.get('/plant', PlantController.plant);//显示plant页面
Router.get('/plantusedrug', PlantController.plantusedrug);//显示plantusedrug页面



Router.get('/input', StorageController.input);//显示input页面
Router.get('/warehouse', StorageController.warehouse);//显示warehouse页面
Router.get('/warehouse2feed', StorageController.warehouse2feed);//显示warehouse2feed页面
Router.get('/plant2input', StorageController.plant2input);//显示plant2input页面
Router.get('/input2warehouse', StorageController.input2warehouse);//显示input2warehouse页面

Router.get('/addinput', StorageController.addinput);
Router.post('/doaddinput', StorageController.doaddinput);
Router.get('/addwarehouse', StorageController.addwarehouse);
Router.post('/doaddwarehouse', StorageController.doaddwarehouse);
// Router.get('/addoutput', StorageController.addoutput);
// Router.post('/doaddoutput', StorageController.doaddoutput);

Router.get('/feed', RoughProcessController.feed);//显示feed页面
Router.get('/feed2product', RoughProcessController.feed2product);//显示feed2product页面



Router.get('/material', DeepProcessController.material);//显示material页面
Router.get('/product', DeepProcessController.product);//显示product页面
Router.get('/material2product', DeepProcessController.material2product);//显示material2product页面

Router.get('/trace/', Trace.index);
Router.get('/safetrace/', Trace.indexsafe);
Router.post('/trace/trace', Trace.trace);


Router.get('/api/getseedinfo/:seedid', getInfo.getSeedInfo);

module.exports = Router;