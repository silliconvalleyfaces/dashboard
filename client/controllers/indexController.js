myApp.controller('indexController', function($scope, $location, $window, postsFactory, usersFactory){

	usersFactory.index(function (data){
		$scope.loggedInUser = data;
		console.log('$scope.loggedInUser', $scope.loggedInUser);
	});
	// THIS WILL LATER BE THE REAL LOGGED IN USER'S ID
	$scope.user_id = 'placeholder';

	postsFactory.getPosts(function(data){
 		console.log(data);
 		$scope.posts = data;
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
 		$scope.post._user_id = 'placeholder';
 		postsFactory.addPost($scope.post, function(data){
			console.log(data);
			$scope.post = null;
			$scope.posts.unshift(data.data);
 		});
 	};

 	$scope.deletePost = function(postId){
 		postsFactory.deletePost(postId, function(status){
 			postsFactory.getPosts(function(data){
		 		console.log(data);
		 		$scope.posts = data;
		 	});
 		});
 	};

 	$scope.searchPosts = function(search){
 		console.log('at the searchPosts controller function'); 
 		postsFactory.searchPosts(search, function(data){
 			console.log("search results:", data);
 			$scope.posts = data;
 			$scope.feed = false;
 		})		
 	}
 	

// Login and Register
	$scope.register = function (){
		console.log("*** front-end indexController -- $scope.register ***");
		console.log('new_user information', $scope.new_user);
		usersFactory.createUser($scope.new_user, function(data){
			console.log(data);
			if(data.data.status === 201){
					$location.url('/wall');
					$window.location.reload();
			}
		});
	};

	$scope.login = function (){
		console.log("*** front-end indexController -- $scope.login ***");
		console.log('login information', $scope.loginInfo);
		usersFactory.login($scope.loginInfo, function (data){
			console.log("usersFactory.login", data);
       		if (data.data.status === 500){
				 	$scope.errorMsg = data.data.message;
			}
			else if(data.data.status === 200){
				 	$location.url('/wall');
					$window.location.reload();
			}
		});
	};

});

