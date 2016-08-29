var mongoose = require('mongoose');
var Post = mongoose.model('posts');
var Comment = mongoose.model('comments');

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
			Post.find({}).populate('comments').sort({created_at: -1}).exec(function(err, posts){
				if(err){
					console.log(err);
				} else {
					console.log(posts);
					res.json(posts);
				}
			})
		},

		searchPosts: function(req, res){
 			console.log(req.body.text); 
 			Post.find({$or: [
 					 {"first_name": new RegExp(req.body.text, "i")}, 
 					 {"last_name": new RegExp(req.body.text, "i")}, 
 					 {"text": new RegExp(req.body.text, "i")},
 					 {"title": new RegExp(req.body.text, "i")}

 				]}, function(err, response){
 				if(err){
 					console.log(err);
 				}
 				else{
 					console.log('at the findNames function', response);
 					res.json(response);
 				}
 			})
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
 		commentPost : function(req,res){
 			console.log(req.body, 'THIS IS REQ BODY commentPost');
			comment = new Comment(req.body);
			comment.save(function(err, result){
				if(err){
					console.log(err);
					console.log('error creating a new comment');
				} else {
					Post.findOne({_id: req.body._post}, function (err, post){
						post.comments.push(result._id);
						console.log('THIS IS THE comment to post',post);
					    post.save(function (err) {
					        if(err) {
					            console.error('ERROR ADDING comment to post!');
					        }
					        else{
					        	res.json(result);
					        }
					    });
					});
				}
			})
 		},


	}
})();