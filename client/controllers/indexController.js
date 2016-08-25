myApp.controller('indexController', function($scope, postsFactory){

	// THIS WILL LATER BE THE REAL LOGGED IN USER'S ID
	$scope.user_id = 'placeholder';

	postsFactory.getPosts(function(data){
 		console.log(data);
 		$scope.posts = data
 	});

	$scope.feed = true; 

	$scope.search = {};

	$scope.reset = function(){
		postsFactory.getPosts(function(data){
	 		console.log(data);
	 		$scope.posts = data; 
	 		$scope.feed = true;
	 		$scope.search.text = null;
	 	});

	}


	$scope.addPost = function(){
 		console.log('hello');
 		// PLACEHOLDER WILL LATER BE THE LOGGED IN USER'S ID 
 		$scope.post._user_id = 'placeholder'
 		postsFactory.addPost($scope.post, function(data){
			console.log(data);
			$scope.post = null;
			$scope.posts.unshift(data.data);
 		})
 	};

 	$scope.deletePost = function(postId){
 		postsFactory.deletePost(postId, function(status){
 			postsFactory.getPosts(function(data){
		 		console.log(data);
		 		$scope.posts = data
		 	});
 		})	
 	}

 	$scope.searchPosts = function(search){
 		console.log('at the searchPosts controller function'); 
 		postsFactory.searchPosts(search, function(data){
 			console.log("search results:", data);
 			$scope.posts = data;
 			$scope.feed = false;
 		})		
 	}
 	
})