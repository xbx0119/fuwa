var inputModuel = require('../models/inputModel');
var warehouseModel = require('../models/warehouseModel');
var outputModel = require('../models/outputModel');

var StorageController = {};

//遍历input表
StorageController.input = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	inputModuel.findAllInput(function(data) {
		resData.data = data.data;

		res.render('Storage/input', resData);
	});

}

//遍历warehouse表
StorageController.warehouse = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	warehouseModel.findAllwarehouse(function(data) {
		resData.data = data.data;

		res.render('Storage/warehouse', resData);
	});

}

//遍历output表
StorageController.output = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	outputModel.findAlloutput(function(data) {
		resData.data = data.data;

		res.render('Storage/output', resData);
	});

}
module.exports = StorageController;