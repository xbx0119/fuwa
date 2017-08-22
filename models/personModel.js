var personModel = {};

personModel.findAllUser = async function(callback) {
	await connection.query('select * from person', function (error, results, fields) {
		if (error) {
			throw error;
		}else {
			console.log('The first is: ', results[0].name);
			callback(results);
		}
	});
}


module.exports = personModel;