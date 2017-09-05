var plantModel = {};

//遍历plant表
plantModel.findAllPlant = function(callback) {
	connection.query('select * from plant', function (error, results, fields) {
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


//种植查询
plantModel.findPlantInfoById = function(id, callback) {
	var resData = {
		code: 1,
		data: null
	}
	// var sql = 'select * from seed where seedid = "' + id + '"';
	var sql = 'select * from plant,plantusedrug where plant.plantid = "' + id + '" and plantusedrug.plantid = "' + id + '"';
	//console.log(sql)
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

module.exports = plantModel;