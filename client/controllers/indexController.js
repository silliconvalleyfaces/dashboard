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
	
})