var SeedModel = require('../models/seedModel');
var SeedlingModel = require('../models/seedlingModel');
var PlantModel = require('../models/plantModel');
var InputModel = require('../models/plant2inputModel');
var WarehouseModel = require('../models/warehouseModel');
var FeedModel = require('../models/feedModel');

var GetInfo = {};



//种子
GetInfo.getSeedInfo = function(req, res, next) {

	var seedid = req.params.seedid;

	SeedModel.findSeedInfoById(seedid, function(resdata) {
		if(resdata.code == 1) {
			res.send(resdata.data);
		}else {
			res.send("error");
		}
	})

}

//秧苗
GetInfo.getSeedlingInfo = function(req, res, next) {

	var seedlingid = req.params.seedlingid;

	SeedlingModel.findSeedlingInfoById(seedlingid, function(resdata) {
		if(resdata.code == 1) {
			res.send(resdata.data);
		}else {
			res.send("error");
		}
	})

}


//种植
GetInfo.getPlantInfo = function(req, res, next) {

	var plantid = req.params.plantid;

	PlantModel.findPlantInfoById(plantid, function(resdata) {
		if(resdata.code == 1) {
			res.send(resdata.data);
		}else {
			res.send("error");
		}
	})

}

//入库
GetInfo.getInputInfo = function(req, res, next) {

	var inputid = req.params.inputid;

	InputModel.findInputInfoById(inputid, function(resdata) {
		if(resdata.code == 1) {
			res.send(resdata.data);
		}else {
			res.send("error");
		}
	})

}

//仓库
GetInfo.getWarehouseInfo = function(req, res, next) {

	var warehouseid = req.params.warehouseid;

	WarehouseModel.findWarehouseInfoById(warehouseid, function(resdata) {
		if(resdata.code == 1) {
			res.send(resdata.data);
		}else {
			res.send("error");
		}
	})

}

//进料
GetInfo.getFeedInfo = function(req, res, next) {

	var feedid = req.params.feedid;

	FeedModel.findFeedInfoById(feedid, function(resdata) {
		if(resdata.code == 1) {
			res.send(resdata.data);
		}else {
			res.send("error");
		}
	})

}

module.exports = GetInfo;