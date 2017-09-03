var input2warehouseModel = {};

//遍历input2warehouse表
input2warehouseModel.findAllInput2warehouse = function(callback) {
	connection.query('select * from input2warehouse', function (error, results, fields) {
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



module.exports = input2warehouseModel;