var material2productModel = {};

//遍历material2product表
material2productModel.findAllMaterial2product = function(callback) {
	connection.query('select * from material2product', function (error, results, fields) {
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


module.exports = material2productModel;