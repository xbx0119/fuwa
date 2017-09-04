let SeedModel = require('../models/seedModel');
let Seed2SeedlingModel = require('../models/seed2seedingModel');
let SeedlingModel = require('../models/seedlingModel');
let Seedling2PlantModel = require('../models/seeding2plantModel');
let PlantModel = require('../models/plantModel');
let Plant2InputModel = require('../models/plant2inputModel');
let InputModel = require('../models/inputModel');
let Input2WarehouseModel = require('../models/input2warehouseModel');
let WarehouseModel = require('../models/warehouseModel');
let Warehouse2FeedModel = require('../models/warehouse2feedModel');
let FeedModel = require('../models/feedModel');
let MaterialModel = require('../models/materialModel');
let Feed2ProductModel = require('../models/feed2productModel');
let Material2ProductModel = require('../models/material2productModel');
let ProductModel = require('../models/productModel');


let api = {},
	private = {};

let Trace = {
	api: api,
	_private: private
}


Trace.index = function(req, res, next) {
	res.render('Trace/trace');
}

Trace.trace = function(req, res, next) {
	let kind = req.body.kind,
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

 {
   	seed: id,
   	next: [{
		seedling: id,
		next: [{
			plant: id,
			next: [{ -> plant2input -> input
				input: id,
				next: [{ -> input2warehouse ->
					warehouse: id,
					next: [{
						feed: id,
						next: [{
							product: id,
							materiad: id
						}]
					}]
				}]
			}]
		}]
   	}]
 }

 {
	seed: id,
	seedling: id,
	plant: id,
	input: id,
	warehouse: id,
	feed: id,
	material: id,
	product: id
 }


 */



// 正向溯源，从种子开始
private.forwardTrace = function(seedid, cb) {
	var sql = '\
				select seed2seedling.seedid, seed2seedling.seedlingid, \
					   seedling2plant.plantid, \
					   plant2input.inputid, \
				       input2warehouse.warehouseid, \
				       warehouse2feed.feedid, \
				       material2product.materialid, \
				       feed2product.productid \
				from seed2seedling, seedling2plant, plant2input, \
					 input2warehouse, warehouse2feed, feed2product, material2product \
				where seed2seedling.seedid = "' + seedid + '" and \
					  seed2seedling.seedlingid = seedling2plant.seedlingid and \
				      seedling2plant.plantid = plant2input.plantid and \
				      plant2input.inputid = input2warehouse.inputid and \
				      input2warehouse.warehouseid = warehouse2feed.warehouseid and \
				      warehouse2feed.feedid = feed2product.feedid and \
				      feed2product.productid = material2product.productid;'
	connection.query(sql, function(error, results, fields) {
		var resData = {
			code: 0,
			data: null
		}
		if(!error) {
			resData.code = 1;
			resData.data = results;
		}else {
			console.log(error)
		}
		cb(resData);
	})

	// Seed2SeedlingModel.findSeedlingIdBySeedId(seedid, function(results) {
	// 	if(results.code == 1 && results.data != null) {
	// 		let seedlings = results.data;
			
	// 		seedlings.forEach(function(value, index) {
	// 			let path1 = self.deepCopyPath(path0);
	// 			path1.seedling = value;

	// 			Seedling2PlantModel.findPlantIdBySeedlingId(value, function(results) {
	// 				if(results.code == 1 && results.data != null) {
	// 					let plants = results.data;

	// 					plants.forEach(function(value, index) {
	// 						let path2 = deepCopyPath(path1);
	// 						path2.plant = value;

	// 						Plant2InputModel.findInputIdByPlantId(value, function(results) {
	// 							if(results.code == 1 && results.data != null) {
	// 								let inputs = results.data;

	// 								inputs.forEach(function(value, index) {
	// 									let path3 = deepCopyPath(path2);
	// 									path3.input = value;

	// 									Input2WarehouseModel.findWarehouseIdByInputId(value, function(results) {
	// 										if(results.code == 1 && results.data != null) {
	// 											let warehouses = results.data;

	// 											warehouses.forEach(function(value. index) {
	// 												let path4 = deepCopyPath(path3);
	// 												path4.warehouse = value;



	// 											})
	// 										}
	// 									})


	// 								})

	// 							}

	// 						})

	// 					})

	// 				}else {
	// 					cb();
	// 				}
	// 			})
	// 		})
	// 	}else {
	// 		cb();
	// 	}
	// 	// cb();
	// });
}

// 反向溯源，从产品开始
private.backwardTrace = function(productid, cb) {
	var sql = '\
				select  feed2product.productid, warehouse2feed.feedid, material2product.materialid, \
				        input2warehouse.warehouseid, plant2input.inputid, seedling2plant.plantid, \
				        seed2seedling.seedlingid, seed2seedling.seedid  \
				from 	seed2seedling, seedling2plant, plant2input, input2warehouse,  \
					 	warehouse2feed, feed2product, material2product \
				where 	feed2product.productid = "' + productid + '" and \
				        material2product.productid = feed2product.productid and  \
				        feed2product.feedid = warehouse2feed.feedid and \
				      	warehouse2feed.warehouseid = input2warehouse.warehouseid and \
				      	input2warehouse.inputid = plant2input.inputid and \
				      	plant2input.plantid = seedling2plant.plantid and \
				      	seedling2plant.seedlingid = seed2seedling.seedlingid';
      
	connection.query(sql, function(error, results, fields) {
		var resData = {
			code: 0,
			data: null
		}
		if(!error) {
			resData.code = 1;
			resData.data = results;
		}else {
			console.log(error)
		}
		cb(resData);
	})
}



private.deepCopyPath = function(obj) {
	let newobj = {};
	for(let key in obj) {
		newobj[key] = obj[key];
	}
	return newobj;
}



module.exports = Trace;