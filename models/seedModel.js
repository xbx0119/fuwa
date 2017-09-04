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


module.exports = seedModel;