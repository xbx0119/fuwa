var materialModuel = require('../models/materialModel');
var productModel = require('../models/productModel');
var material2productModel = require('../models/material2productModel');
var DeepProcessController = {};

//遍历material表
DeepProcessController.material = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	materialModuel.findAllmaterial(function(data) {
		resData.data = data.data;

		res.render('DeepProcess/material', resData);
	});

}

//遍历product表
DeepProcessController.product = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	productModel.findAllproduct(function(data) {
		resData.data = data.data;

		res.render('DeepProcess/product', resData);
	});

}

//遍历material2product表
DeepProcessController.material2product = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	material2productModel.findAllMaterial2product(function(data) {
		resData.data = data.data;

		res.render('DeepProcess/material2product', resData);
	});

}


module.exports = DeepProcessController;