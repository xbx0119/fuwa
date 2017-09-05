
let api = {},
	private = {};

let Trace = {
	api: api,
	_private: private
}


Trace.index = function(req, res, next) {
	var data = {
		seed: {},
		product: {}
	}
	connection.query('select seedid from seed', function(error, results, fields) {
		if(error) {
			next();
		}
		data.seed = results;
		console.log(results)
		connection.query('select productid from product', function(error, results, fields) {
			if(error) {
				next();
			}
			data.product = results;
			res.render('Trace/trace', data);
		})
	})
}
Trace.indexsafe = function(req, res, next) {
	var data = {
		seed: {},
		product: {}
	}
	connection.query('select seedid from seed', function(error, results, fields) {
		if(error) {
			next();
		}
		data.seed = results;
		console.log(results)
		connection.query('select productid from product', function(error, results, fields) {
			if(error) {
				next();
			}
			data.product = results;
			res.render('Trace/safetrace', data);
		})
	})
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

 {
	1: {
		seed: id
	},
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
				       feed2product.productid \
				from seed2seedling, seedling2plant, plant2input, \
					 input2warehouse, warehouse2feed, feed2product \
				where seed2seedling.seedid = "' + seedid + '" and \
					  seed2seedling.seedlingid = seedling2plant.seedlingid and \
				      seedling2plant.plantid = plant2input.plantid and \
				      plant2input.inputid = input2warehouse.inputid and \
				      input2warehouse.warehouseid = warehouse2feed.warehouseid and \
				      warehouse2feed.feedid = feed2product.feedid;'
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
		console.log(resData.data)
		cb(resData);
	})


}

// 反向溯源，从产品开始
private.backwardTrace = function(productid, cb) {
	var sql = '\
				select  feed2product.productid, material2product.materialid, warehouse2feed.feedid, \
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
		console.log(resData.data)
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