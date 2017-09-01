var personModel = {};

//遍历person表
personModel.findAllUser = function(callback) {
	connection.query('select * from person', function (error, results, fields) {
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

//登陆时检索是否有该用户
personModel.findUser = function(inputname, inputpasswd, callback) {
	connection.query('select * from person where name="'+inputname+'" and password="'+inputpasswd+'"', 
		function (error, results, fields) {
			var resData = {
				code: 0,
				data: {}
			}
			if (results) {
				resData.code = 1;
				resData.data = results[0];
				// console.log(results);
				callback(resData);
				// throw error;
			}else {
				callback(resData);
				// console.log(results);
				// console.log(error);
				throw error;
			}
		});
}

//注册时插入用户
personModel.insertUser = function(inputid, inputname, inputpasswd, inputaccount, callback) {
	connection.query('insert into person set ?',{
					personid : inputid,
					name : inputname,
					password : inputpasswd,
					account : inputaccount
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

module.exports = personModel;