var inputModuel = require('../models/inputModel');
var warehouseModel = require('../models/warehouseModel');

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

module.exports = StorageController;