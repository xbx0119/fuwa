var plant2inputModel = {};

//遍历plant2input表
plant2inputModel.findAllPlant2input = function(callback) {
	connection.query('select * from plant2input', function (error, results, fields) {
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



module.exports = plant2inputModel;