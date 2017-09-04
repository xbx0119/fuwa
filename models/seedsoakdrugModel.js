var seedsoakdrugModel = {};

//遍历seedsoakdrug表
seedsoakdrugModel.findAllSeedsoakdrug = function(callback) {
	connection.query('select * from seedsoakdrug', function (error, results, fields) {
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


module.exports = seedsoakdrugModel;