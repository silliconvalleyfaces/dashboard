myApp.controller('indexController', function($scope, postsFactory){

	console.log('I am able to load my indexController along with my index partial');


	// postsFactory.getPosts(function(data){
	// 	$scope.posts = data
	// });


	$scope.addPost = function(){
		console.log('hello');
		postsFactory.addPost($scope.post, function(data){
			console.log(data);
		})
	};
	$scope.searchPosts = function(search){
		console.log('at the searchPosts controller function'); 
		postsFactory.searchPosts(search, function(data){
			console.log(data);
		})		
	}
	
})