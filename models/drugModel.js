var drugModel = {};

//遍历drug表
drugModel.findAllDrug = function(callback) {
	connection.query('select * from drug', function (error, results, fields) {
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


module.exports = drugModel;