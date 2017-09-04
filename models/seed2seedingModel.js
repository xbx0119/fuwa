var seed2seedlingModel = {};

//遍历product表
seed2seedlingModel.findAllseed = function(callback) {
	connection.query('select * from seed2seedling', function (error, results, fields) {
		var resData = {
			code: 0,
			data: {}
		}
		if (error) {
			throw error;
		}else {
			resData.code = 1;
			resData.data = results;			
		}
		callback(resData);
	});
}

// 根据种子id查询秧苗id
seed2seedlingModel.findSeedlingIdBySeedId = function(seedid, cb) {
	var sql = 'select seedlingid from seed2seedling where seedid = "' + seedid + '"';
	console.log(sql)
	connection.query(sql, function (error, results, fields) {
		var resData = {
			code: 0,
			data: null
		}
		if (error) {
			throw error;
		}else {
			resData.code = 1;
			resData.data = results;
			console.log('seedlingid: ', results);
		}
		cb(resData);
	});
}

// 根据秧苗id查询种子id
seed2seedlingModel.findSeedIdBySeedlingId = function(cb) {
	
}

module.exports = seed2seedlingModel;