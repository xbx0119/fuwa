var SeedModel = require('../models/seedModel');
var SeedlingModel = require('../models/seedlingModel');
var PlantModel = require('../models/plantModel');
var InputModel = require('../models/InputModel');
var WarehouseModel = require('../models/warehouseModel');
var FeedModel = require('../models/feedModel');
var ProductModel = require('../models/productModel');
var MaterialModel = require('../models/MaterialModel');


var api = {},
	private = {};

var Trace = {
	api: api,
	_private: private
}


Trace.index = function(req, res, next) {
	res.render('Trace/trace');
}

Trace.trace = function(req, res, next) {
	var kind = req.body.kind,
		code = req.body.code;
	console.log(kind + " : " + code);

	private.trace(kind, code, function(data) {
		res.send(data);
	});

 
}

// 溯源中转
private.trace = function(kind, code, cb) {
	if(kind == 'seed') {
		this.forwardTrace(code, cb);
	}else if(kind == 'product') {
		this.backwardTrace(code, cb);
	}else {
		next();
	}
}

/*
 溯源返回的数据结构
 



 */



// 正向溯源，从种子开始
private.forwardTrace = function(seedid, cb) {

	cb("forwardTrace");
}

// 反向溯源，从产品开始
private.backwardTrace = function(productid, cb) {
	cb("backwardTrace");
}



module.exports = Trace;