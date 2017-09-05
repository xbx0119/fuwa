var plant2inputModel = {};

//遍历plant2input表
plant2inputModel.findAllPlant2input = function(callback) {
	connection.query('select * from plant2input', function (error, results, fields) {
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

//入库查询
plant2inputModel.findInputInfoById = function(id, callback) {
	var resData = {
		code: 1,
		data: null
	}
	// var sql = 'select * from seed where seedid = "' + id + '"';
	var sql = 'select * from plant2input where plant2input.inputid = "' + id + '"';
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


module.exports = plant2inputModel;