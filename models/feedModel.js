var feedModel = {};

//遍历feed表
feedModel.findAllfeed = function(callback) {
	connection.query('select * from feed', function (error, results, fields) {
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

module.exports = feedModel;