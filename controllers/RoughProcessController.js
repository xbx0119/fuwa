var feedModel = require('../models/feedModel');
var feed2productModel = require('../models/feed2productModel');

var RoughProcessController = {};

//遍历input表
RoughProcessController.feed = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	feedModel.findAllfeed(function(data) {
		resData.data = data.data;

		res.render('RoughProcess/feed', resData);
	});

}

//遍历warehouse表
RoughProcessController.feed2product = function(req, res, next) {
	var resData = {
		code: 0,
		data: {}
	}
	feed2productModel.findAllfeed2product(function(data) {
		resData.data = data.data;

		res.render('RoughProcess/feed2product', resData);
	});

}


module.exports = RoughProcessController;