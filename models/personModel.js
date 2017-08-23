var personModel = {};

personModel.findAllUser = function(callback) {
	connection.query('select * from person', function (error, results, fields) {
		if (error) {
			throw error;
		}else {
			console.log('The first is: ', results[0].name);
			
			callback(results);
		}
	});
}


module.exports = personModel;