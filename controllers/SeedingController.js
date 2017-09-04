var drugModel = require('../models/drugModel');
var SeedlingModel = require('../models/seedlingModel');

var SeedingController = {};

//遍历drug表
SeedingController.drug = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	drugModel.findAllDrug(function(data) {
		resData.data = data.data;

		res.render('Seeding/drug', resData);
	});

}

//遍历seedling表
SeedingController.seeding = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	SeedlingModel.findAllSeedling(function(data) {
		resData.data = data.data;

		res.render('Seeding/seeding', resData);
	});

}



module.exports = SeedingController;