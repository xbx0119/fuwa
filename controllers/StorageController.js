var inputModuel = require('../models/inputModel');
var warehouseModel = require('../models/warehouseModel');
var warehouse2feedModel = require('../models/warehouse2feedModel');
var plant2inputModel = require('../models/plant2inputModel');
var input2warehouseModel = require('../models/input2warehouseModel');

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

//遍历warehouse2feed表
StorageController.warehouse2feed = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	warehouse2feedModel.findAllWarehouse2feed(function(data) {
		resData.data = data.data;

		res.render('Storage/warehouse2feed', resData);
	});

}


//遍历plant2input表
StorageController.plant2input = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	plant2inputModel.findAllPlant2input(function(data) {
		resData.data = data.data;

		res.render('Storage/plant2input', resData);
	});

}

//遍历input2warehouse表
StorageController.input2warehouse = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	input2warehouseModel.findAllInput2warehouse(function(data) {
		resData.data = data.data;

		res.render('Storage/input2warehouse', resData);
	});

}

//显示addinput页面
StorageController.addinput = function(req, res, next) {
	res.render('Storage/addinput');
}

//实现doaddinput
StorageController.doaddinput = function(req, res, next) {
	var inputid = req.body.inputid;
	var harvestdate = req.body.harvestdate;
	var quantity = req.body.quantity;
	var inputdate = req.body.inputdate;
	var personid = req.body.personid;

	inputModuel.insertInput(inputid, warehouseid, personid, function(resData) {
		if (resData.data.length !== 0) {
			res.redirect('/input');
		}else {
			res.redirect('/addinput');
		}
	});
}


//显示addwarehouse页面
StorageController.addwarehouse = function(req, res, next) {
	res.render('Storage/addwarehouse');
}

//实现doaddwarehouse
StorageController.doaddwarehouse = function(req, res, next) {
	var warehouseid = req.body.warehouseid;
	var feedid = req.body.feedid;
	var surface = req.body.surface;
	var capacity = req.body.capacity;
	var standard = req.body.standard;
	var personid = req.body.personid;

	warehouseModel.insertWarehouse(warehouseid, feedid, surface, capacity, standard, personid, function(resData) {
		if (resData.data.length !== 0) {
			res.redirect('/warehouse');
		}else {
			res.redirect('/addwarehouse');
		}
	});
}
//显示addwarehouse2feed页面
StorageController.addwarehouse2feed = function(req, res, next) {
	res.render('Storage/addwarehouse2feed');
}

//实现doaddwarehouse2feed
StorageController.doaddwarehouse2feed = function(req, res, next) {
	
	var warehouseid = req.body.warehouseid;
	var feedid = req.body.feedid;
	var personid = req.body.personid;

	warehouse2feedModel.insertWarehouse2feed(warehouseid, feedid, personid, function(resData) {
		if (resData.data.length !== 0) {
			res.redirect('/warehouse2feed');
		}else {
			res.redirect('/addwarehouse2feed');
		}
	});
}
module.exports = StorageController;