var warehouse2feedModel = {};

//遍历warehouse2feed表
warehouse2feedModel.findAllWarehouse2feed = function(callback) {
	connection.query('select * from warehouse2feed', function (error, results, fields) {
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

//
warehouse2feedModel.insertWarehouse2feed = function(inputwarehouseid, inputfeedid, inputpersonid, callback) {
	connection.query('insert into warehouse2feed set ?',{
					warehouseid : inputwarehouseid,
					feedid : inputfeedid,
					personid : inputpersonid
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
module.exports = warehouse2feedModel;