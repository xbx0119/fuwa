var seedlingModel = {};

//遍历seedling表
seedlingModel.findAllSeedling = function(callback) {
	connection.query('select * from seedling', function (error, results, fields) {
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


//秧苗查询
seedlingModel.findSeedlingInfoById = function(id, callback) {
	var resData = {
		code: 1,
		data: null
	}
	var sql = 'select * from seedling,seedlingspraydrug where seedling.seedlingid = "' + id + '" and seedlingspraydrug.seedlingid = "' + id + '"';
	console.log(sql)
	connection.query(sql, function(error, results) {
		if(error) {
			resData.code = 0;
			console.log(error)
		}else {
			resData.data = results;
			console.log(results);
		}
		callback(resData);
	});
}

module.exports = seedlingModel;