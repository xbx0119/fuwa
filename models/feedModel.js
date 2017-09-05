var feedModel = {};

//遍历feed表
feedModel.findAllfeed = function(callback) {
	connection.query('select * from feed', function (error, results, fields) {
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


//进料查询
feedModel.findFeedInfoById = function(id, callback) {
	var resData = {
		code: 1,
		data: null
	}
	// var sql = 'select * from seed where seedid = "' + id + '"';
	var sql = 'select * from feed where feed.feedid = "' + id + '"';
	//console.log(sql)
	connection.query(sql, function(error, results) {
		if(error) {
			resData.code = 0;
			console.log(error)
		}else {
			resData.data = results;
		}
		callback(resData);
	});
}

module.exports = feedModel;