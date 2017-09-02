var materialModel = {};

//遍历material表
materialModel.findAllmaterial = function(callback) {
	connection.query('select * from material', function (error, results, fields) {
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

module.exports = materialModel;