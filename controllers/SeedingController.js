var drugModel = require('../models/drugModel');
var SeedlingModel = require('../models/seedlingModel');
var SeedModel = require('../models/seedModel');
var SeedsoakdrugModel = require('../models/seedsoakdrugModel');
var SeedlingspraydrugModel = require('../models/seedlingspraydrugModel');

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
SeedingController.seedling = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	SeedlingModel.findAllSeedling(function(data) {
		resData.data = data.data;

		res.render('Seeding/seedling', resData);
	});

}

//遍历seed表
SeedingController.seed = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	SeedModel.findAllSeed(function(data) {
		resData.data = data.data;

		res.render('Seeding/seed', resData);
	});

}

//遍历seedsoakdrug表
SeedingController.seedsoakdrug = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	SeedsoakdrugModel.findAllSeedsoakdrug(function(data) {
		resData.data = data.data;

		res.render('Seeding/seedsoakdrug', resData);
	});

}

//遍历seedlingspraydrug表
SeedingController.seedlingspraydrug = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	SeedlingspraydrugModel.findAllSeedlingspraydrug(function(data) {
		resData.data = data.data;

		res.render('Seeding/seedlingspraydrug', resData);
	});

}


module.exports = SeedingController;