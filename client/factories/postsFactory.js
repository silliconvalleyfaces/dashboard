myApp.factory('postsFactory', function($http){

	var posts = []

	var factory = {}

	factory.getPosts = function(callback){
		$http.get('/posts').then(function(data){
			posts = data.data;
			// console.log("factory.getPosts: ", posts);
			callback(data.data);
		});
	}

	factory.addPost = function(info, callback){
		// console.log('info:', info)
		$http.post('/posts', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				callback(data);
			}
		})
	}

	factory.searchPosts = function(search, callback){
 		$http.post('/search', search).then(function(output){
 			if(output.error){
 				console.log(output.error);
 			}
 			else{
 				callback(output.data);
 			}
 		})
 	}

 	factory.updatePost = function(postInfo, callback){
		console.log('editPost at factory', postInfo)
		$http.post('/posts/' + postInfo._id + '/edit', postInfo).then(function(data){
			if(data.error){
				callback(data);
			} else {
				callback(data);
				console.log("This is update data!", data)
			}
		});
	}

 	factory.deletePost = function(postId, callback){
		console.log('deletePost at factory', postId)
		$http.post('/posts/' + postId + '/destroy').then(function(data){
			if(data.error){
				callback(data);
			} else {
				callback(data);
			}
		})
	}

	factory.flagPost = function(postId, callback){
		console.log('flagPost at factory', postId)
		$http.post('/posts/' + postId + '/flag').then(function(data){
			if(data.error){
				callback(data);
			} else {
				callback(data);
			}
		})
	}

	factory.unflagPost = function(postId, callback){
		console.log('unflagPost at factory', postId)
		$http.post('/posts/' + postId + '/unflag').then(function(data){
			if(data.error){
				callback(data);
			} else {
				callback(data);
			}
		})
	}

	factory.commentPost = function(commentData, callback){
		console.log('got to commetPost at factory');
		$http.post('/comments', commentData).then(function(data){
			console.log('back in the factory commentPost',data);
			callback(data);
		});
	};

	factory.deleteComment = function(commentId, callback){
		console.log('deletecomment at factory', commentId);
		$http.post('/comments/' + commentId + '/destroy').then(function(data){
			if(data.error){
				callback(data);
			} else {
				callback(data);
			}
		});
	};
	factory.getFlaggedPosts = function(callback){
 		$http.get('/flagged_posts').then(function(data){
 			posts = data.data;
 			// console.log("factory.getPosts: ", posts);
 			callback(data.data);
 		});
 	}

	return factory;
})
