var mongoose = require('mongoose');
var mongooseDb = mongoose.model('Mongoosedb');

module.exports = (function() {
	return {
		// getMongooses: function(req, res){
		// 	mongooseDb.find({}, function(err, mongooses){
		// 		if(err){
		// 			console.log(err);
		// 			console.log('getmongooses function mongooses controller');
		// 		} else {
		// 			res.json(mongooses);
		// 		}
		// 	})
		// }
	}
})();