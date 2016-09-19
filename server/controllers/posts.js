var mongoose = require('mongoose');
var Post = mongoose.model('posts');
var Comment = mongoose.model('comments');
var User = mongoose.model('users')

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
			Post.find({}).populate('comments').populate('_user_id').sort({created_at: -1}).exec(function(err, posts){
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
 			// Post.find({$or: [
 			// 		 {"first_name": new RegExp(req.body.text, "i")},
 			// 		 {"last_name": new RegExp(req.body.text, "i")},
 			// 		 {"text": new RegExp(req.body.text, "i")},
 			// 		 {"title": new RegExp(req.body.text, "i")}

 			// 	]}, function(err, response){
 			// 	if(err){
 			// 		console.log(err);
 			// 	}
 			// 	else{
 			// 		console.log('at the findNames function', response);
 			// 		// res.json(response);
 			// 	}
 			// })
 			Post.find().populate({
 				path: '_user_id', 
 				match: {$or:[{
					first_name: new RegExp(req.body.text, "i"), 
 					last_name: new RegExp(req.body.text, "i"), 
 					text: new RegExp(req.body.text, "i"),
 					title: new RegExp(req.body.text, "i")
 				}]
 				}
 			}).exec(function(err, posts){
 				console.log(posts)
 				res.json(posts);
 				// posts = posts.filter(function(post){
 				// 	return post.text
 				// })
 			})
 		},
	    editPost: function (req, res){
	      console.log("*@*@* Back-end controller -- posts.js -- editPost ***");
	      console.log('edit post req.body: ', req.body._id);
	      // replace session.userId with cookieId
	      Post.findOne({_id:req.body._id}, function(err, post) {
	                if (err) {
	                    console.log("you done fucked up", err);
	                } else {
	                    post.title = req.body.title;
	                    post.url = req.body.url;
	                    post.urlVideo = req.body.urlVideo;
	                    post.text = req.body.text;
	                    post.save(function(err){
	                        res.json(post);
	                    });
	                }
	            });
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
		flagPost: function(req, res){
 			Post.findOne({_id: req.params.id}, function(err, post){
				post.flagged = true
				console.log('THIS IS THE post to flag',post);
					post.save(function (err) {
							if(err) {
									console.error('ERROR flagging post!');
							}
							else{
								Post.find({}).populate('comments').sort({created_at: -1}).exec(function(err, posts){
									if(err){
										console.log(err);
									} else {
										console.log(posts);
										res.json(posts);
									}
								})
							}
					});
			});
 		},
		unflagPost: function(req, res){
 			Post.findOne({_id: req.params.id}, function(err, post){
				post.flagged = false
				console.log('THIS IS THE post to unflag',post);
					post.save(function (err) {
							if(err) {
									console.error('ERROR unflagging post!');
							}
							else{
								res.end();
							}
						})
					});
 		},
		getFlaggedPosts: function(req, res){
			Post.find({flagged: true}).populate('comments').populate('_user_id').sort({created_at: -1}).exec(function(err, posts){
				if(err){
					console.log(err);
				} else {
					console.log(posts);
					res.json(posts);
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
					console.log("commentPost - getResult = ", result, "\n ######################################" );
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
 		destroyComment: function(req, res){

 			Comment.findOne({_id: req.params.id}, function (err, comment){
				if(err){
					console.log('error finding comment', err);
				} else {
					var commentId = comment._id;
					var postId = comment._post;
					console.log('THIS IS COME', postId);
					comment.remove();
					Post.findOne({_id: postId}, function (erro, post){
						if(err){
							console.log('error finding post', erro);
						} else {
							for(var i = 0; i < post.comments.length; i++){
								if(post.comments[i].equals(commentId)){
									post.comments.splice(i, 1);
									res.json({status: 'ok'});
								}
							}

						};
					});
				};
			});
 		},


	}
})();
