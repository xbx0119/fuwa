var outputModel = {};

//遍历output表
outputModel.findAlloutput = function(callback) {
	connection.query('select * from output', function (error, results, fields) {
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

module.exports = outputModel;