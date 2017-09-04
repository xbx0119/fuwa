var seedling2plantModel = {};

//遍历product表
seedling2plantModel.findAll = function(callback) {
	connection.query('select * from seedling2plant', function (error, results, fields) {
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
seedling2plantModel.findPlantIdBySeedlingId = function(seedlingid, cb) {
	var sql = 'select plantid from seedling2plant where seedlingid = "' + seedlingid + '"';
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
			console.log('plantid: ', results);
		}
		cb(resData);
	});
}

// 根据秧苗id查询种子id
seedling2plantModel.findSeedlingIdByPlantId = function(cb) {
	
}

module.exports = seedling2plantModel;