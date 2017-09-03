var warehouseModel = {};

//遍历warehouse表
warehouseModel.findAllwarehouse = function(callback) {
	connection.query('select * from warehouse', function (error, results, fields) {
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

module.exports = warehouseModel;