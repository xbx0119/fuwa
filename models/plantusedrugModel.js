var plantusedrugModel = {};

//遍历plantusedrug表
plantusedrugModel.findAllPlantusedrug = function(callback) {
	connection.query('select * from plantusedrug', function (error, results, fields) {
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


module.exports = plantusedrugModel;