myApp.controller('indexController', function($scope, postsFactory){

	postsFactory.getPosts(function(data){
 		console.log(data);
 		$scope.posts = data
 	});

	$scope.addPost = function(){
 		console.log('hello');
 		postsFactory.addPost($scope.post, function(data){
			console.log(data);
			$scope.post = null;
			$scope.posts.unshift(data.data);
 		})
 	};

 	$scope.searchPosts = function(search){
 		console.log('at the searchPosts controller function'); 
 		postsFactory.searchPosts(search, function(data){
 			console.log(data);
 		})		
 	}
 	
})