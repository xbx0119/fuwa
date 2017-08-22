var express = require('express');
var Router = express.Router();

var IndexController = require('./controllers/IndexController');



Router.get('/', IndexController.index);
Router.get('/index', IndexController.index);


module.exports = Router;