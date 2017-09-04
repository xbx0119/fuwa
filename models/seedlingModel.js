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


module.exports = seedlingModel;