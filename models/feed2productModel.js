var feed2productModel = {};

//遍历feed2product表
feed2productModel.findAllfeed2product = function(callback) {
	connection.query('select * from feed2product', function (error, results, fields) {
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

module.exports = feed2productModel;