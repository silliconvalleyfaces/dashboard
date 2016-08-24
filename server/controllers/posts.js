var mongoose = require('mongoose');
var Post = mongoose.model('posts');

module.exports = (function() {
	return {

		makePost: function(req, res){
			console.log(req.body, 'THIS IS REQ BODY');
			post = new Post(req.body);
			post.save(function(err, result){
				if(err){
					console.log(err);
					console.log('error creating a new post');
				} else {
					console.log('this is our new post',result);
					res.json(result);

				}
			})
		},

		getPosts: function(req, res){
			Post.find({}).sort({created_at: -1}).exec(function(err, posts){
				if(err){
					console.log(err);
				} else {
					console.log(posts);
					res.json(posts);
				}
			})
		},

		searchPosts: function(req, res){
 			console.log(req.body); 
 			// MongooseDb.find({"name": new RegExp(req.body.name, "i")}, function(err, response){
 			// 	if(err){
 			// 		console.log(err);
 			// 	}
 			// 	else{
 			// 		console.log('at the findNames function')
 			// 		res.json(response);
 			// 	}
 			// })
 		},
 		destroyPost: function(req, res){
 			Post.findByIdAndRemove(req.params.id, function(err){
 				if(err){
 					console.log('error deleting post:', err);
 				}
 				else{
 					res.json({status: 'ok'})
 				}
 			})
 		},



	}
})();