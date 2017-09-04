var plantModel = require('../models/plantModel');
var plantusedrugModel = require('../models/plantusedrugModel');

var PlantController = {};

//遍历plant表
PlantController.plant = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	plantModel.findAllPlant(function(data) {
		resData.data = data.data;

		res.render('Plant/plant', resData);
	});

}

//遍历plantusedrug表
PlantController.plantusedrug = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	plantusedrugModel.findAllPlantusedrug(function(data) {
		resData.data = data.data;

		res.render('Plant/plantusedrug', resData);
	});

}

module.exports = PlantController;