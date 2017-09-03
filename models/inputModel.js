var inputModel = {};

//遍历input表
inputModel.findAllInput = function(callback) {
	connection.query('select * from input', function (error, results, fields) {
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

//插入input表
inputModel.insertInput = function(inputinputid, inputharvestdate, inputquantity, inputinputdate, inputpersonid, callback) {
	connection.query('insert into input set ?',{
					inputid : inputinputid,
					harvestdate : inputharvestdate,
					quantity : inputquantity,
					inputdate : inputinputdate,
					personid : inputpersonid,
				},function(error, results, fields){
					var resData = {
						code: 0,
						data: {}
					}
					
					if(error) {
						console.log("insert error");
						throw error;
					}else {
						console.log(results);
						resData.code = 1;
						resData.data = results;
					}
					
					callback(resData);

				});
}
module.exports = inputModel;