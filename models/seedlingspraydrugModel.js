var seedlingspraydrugModel = {};

//遍历seedlingspraydrug表
seedlingspraydrugModel.findAllSeedlingspraydrug = function(callback) {
	connection.query('select * from seedlingspraydrug', function (error, results, fields) {
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

module.exports = seedlingspraydrugModel;