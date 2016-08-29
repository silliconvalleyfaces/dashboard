myApp.controller('indexController', function($scope, $location, $window, $timeout, postsFactory, usersFactory){
// the following code is for switching navbarLogin bars based on different routes. navbar files are in '/partials/navbarLogin.html'  and '/partials/navbarWall.html'
	$scope.$on('$locationChangeSuccess', function($routeParams) {
        var path = $location.path();
        var product_id = $routeParams.product_id;
        // $scope.templateUrl = (path === '/ministore/') ? '/partials/miniStoreNav.html' : '/partials/normalNav.html';
        // $scope.templateUrl = (path === '/ministore/main'|| path === '/ministore/customers' || path === '/ministore/orders'|| path === '/ministore/products' || path === '/ministore/products/'+product_id )  ? '/partials/miniStoreNav.html' : '/partials/normalNav.html';
        $scope.templateUrl = (path === '/' || path === '/login' || path === '/register') ? '/partials/navbarLogin.html' : '/partials/navbarWall.html';
    });
// End of switching navigation bar

	$scope.userStatus = false;
	$scope.comment = {};

	usersFactory.index(function (data){
		$scope.loggedInUser = data;
		if($scope.loggedInUser){
			$scope.user_id = data.data[0]._id;
			$scope.user_name = data.data[0].first_name + " " + data.data[0].last_name;
		}
		console.log('$scope.loggedInUser', $scope.loggedInUser);
		console.log('$scope.user_id', $scope.user_id);
	});
	// // THIS WILL LATER BE THE REAL LOGGED IN USER'S ID
	// $scope.user_id = 'placeholder';

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

 		$scope.post._user_id = $scope.user_id;
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
 		});
 	};

 	$scope.commentPost = function(postId){
 		var commentData = {
 			text: $scope.comment[postId].text,
 			_user_name: $scope.user_name,
 			_user: $scope.user_id,
 			_post : postId,
 		};
 		console.log(commentData, "COMMENT DATA")
 		postsFactory.commentPost(commentData, function(data){
 			console.log('back from commenting post', data);
 		});
 	};


// Login and Register
	$scope.register = function (){
		console.log("*** front-end indexController -- $scope.register ***");
		console.log('new_user information', $scope.new_user);
		usersFactory.createUser($scope.new_user, function(data){
			console.log(data);
			if(data.data.isLoggedIn){
					$location.url('/wall');
					// $window.location.reload();
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
				console.log(" $scope.userStatus", $scope.userStatus);
				 	$location.url('/wall');
					// $window.location.reload();
			}

		});
	};

	chageUserStatus = function (){
		$scope.userStatus = true;
	};
	//Find a Person
	$scope.searchUsers = function(){
 		console.log("*** front-end indexController -- $scope.searchUsers ***");
 		usersFactory.searchUsers($scope.SearchName, function(data){
 			console.log(" users search results:", data);
 			$scope.users = data;
 			$scope.feed = false;
 		});
 	};


});
