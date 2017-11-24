var seedModel = {};

//遍历seed表
seedModel.findAllSeed = function(callback) {
	connection.query('select * from seed', function (error, results, fields) {
		var resData = {
			code: 0,
			data: {}
		}
		if (error) {
			throw error;
		}else {
			resData.code = 1;
			resData.data = results;
			console.log('The first is: ', results);
			
		}
		callback(resData);
	});
}

//种子查询
seedModel.findSeedInfoById = function(id, callback) {
	var resData = {
		code: 1,
		data: null
	}
	// var sql = 'select * from seed where seedid = "' + id + '"';
	var sql = 'select seed.seedid, seed.variety, seed.type, \
				drug.name, drug.dosage, drug.standard, drug.effect, \
				seedsoakdrug.concentration, seedsoakdrug.startdate, seedsoakdrug.enddata  \
				from seed, seedsoakdrug, drug \
				where seed.seedid = "' + id + '" and seedsoakdrug.seedid = "' + id + '" and drug.drugid = seedsoakdrug.drugid';
	connection.query(sql, function(error, results) {
		if(error) {
			resData.code = 0;
			console.log(error)
		}else {
			resData.data = results;
		}
		callback(resData);
	});
}


seedModel.findProductBySeed = function(id, callback) {
	var resData = {
		code: 1,
		data: null
	}
	var sql =  'select seed2seedling.seedid, seed2seedling.seedlingid, \
					   seedling2plant.plantid, \
					   plant2input.inputid, \
				       input2warehouse.warehouseid, \
				       warehouse2feed.feedid, \
				       feed2product.productid \
			   	from    seed2seedling, seedling2plant, plant2input, \
	           			input2warehouse, warehouse2feed, feed2product \
          		where   seed2seedling.seedid = "' + id + '" and \
	  					seed2seedling.seedlingid = seedling2plant.seedlingid and \
						seedling2plant.plantid = plant2input.plantid and \
						plant2input.inputid = input2warehouse.inputid and \
						input2warehouse.warehouseid = warehouse2feed.warehouseid and \
						warehouse2feed.feedid = feed2product.feedid';

	connection.query(sql, function(error, results) {
		if(error) {
			resData.code = 0;
			console.log(error)
		}else {
			resData.data = results;
		}
		callback(resData);
	});
}


module.exports = seedModel;