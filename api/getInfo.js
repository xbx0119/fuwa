var SeedModel = require('../models/seedModel');


var GetInfo = {};




GetInfo.getSeedInfo = function(req, res, next) {

	var seedid = req.params.seedid;

	SeedModel.findSeedInfoById(seedid, function(resdata) {
		if(resdata.code == 1) {
			res.send(resdata.data);
		}else {
			res.send("error");
		}
	})

}



module.exports = GetInfo;