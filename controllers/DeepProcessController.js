var materialModuel = require('../models/materialModel');
var productModel = require('../models/productModel');

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


module.exports = DeepProcessController;