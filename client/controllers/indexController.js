myApp.controller('indexController', function($scope, $location, $window, $timeout, $cookies, authFact, postsFactory, usersFactory){

// the following code is for switching navbarLogin bars based on different routes. navbar files are in '/partials/navbarLogin.html'  and '/partials/navbarWall.html'
	// $scope.$on('$locationChangeSuccess', function($routeParams) {
  //       var path = $location.path();
  //       var product_id = $routeParams.product_id;
  //
  //       $scope.templateUrl = (path === '/' || path === '/login' || path === '/register') ? '/partials/navbarLogin.html' : '/partials/navbarWall.html';
  //   });
// End of switching navigation bar


	$scope.comment = {};
	$scope.isLogged = function (){
		return authFact.getAccessToken();
	};

	if(authFact.getUserCookie()){
		var userCookie = authFact.getUserCookie();
		console.log("var userCookie = authFact.getUserCookie();", userCookie);
		console.log(userCookie[0]);
		console.log(userCookie[1]);
		console.log(userCookie[2]);
	}


	// console.log("authFact.getUserCookieId: ", authFact.getUserCookieId());
	// console.log("authFact.getUserCookie: ", userCookie);
	// console.log("$scope.isLogged()", $scope.isLogged() );

	usersFactory.index(function (data){
		$scope.loggedInUser = data;
		if($scope.loggedInUser.data.length > 0){
			$scope.userStatus = true;
			$scope.user_id = 	authFact.getUserCookieId();
			$scope.user_name = data.data[0].first_name + " " + data.data[0].last_name;
		}
		// console.log('$scope.loggedInUser', $scope.loggedInUser);
		// console.log('$scope.user_id', $scope.user_id);

	});

	postsFactory.getPosts(function(data){
 		console.log(data);
 		$scope.posts = data;
 	});

	$scope.feed = true;
	// $scope.posts = [];
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
			console.log("postsFactory.addPost(", data);
			$scope.post = null;
			$scope.posts.unshift(data.data);
			console.log('DATA BACK', data.data);
			postsFactory.getPosts(function(dat){

		 		$scope.posts = dat;
		 	});
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
 			postsFactory.getPosts(function(dat){
	 			console.log(data);
	 			$scope.posts = dat;
	 		});
 		});

 	};

 	$scope.deleteComment = function(commentId){
 		postsFactory.deleteComment(commentId, function(status){
 			console.log('status deleting comment:', status);
 			postsFactory.getPosts(function(dat){
	 			console.log('THIS ARE THE POSTS',dat);
	 			$scope.posts = dat;
	 		});
 		});
 	};


//##############################################
// Login and Register
//##############################################


	$scope.register = function (){
		console.log("*** front-end indexController -- $scope.register ***");
		console.log('new_user information', $scope.new_user);
		usersFactory.createUser($scope.new_user, function(data){
			console.log(data);
			if(data.data.isLoggedIn){
				console.log("data.data: ", data.data);
					authFact.setUserCookieId(data.data.userCookie._id);
					authFact.setAccessToken(data.data.authentication);
					$location.url('/wall');
			}
			else if(data.data.status === 500){
				$scope.errorMsg = data.data.message;
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
					authFact.setUserCookieId(data.data.userCookie._id);
					console.log('authFact.setUserCookie');
					authFact.setUserCookie(data.data.userCookie._id, data.data.userCookie.first_name, data.data.userCookie.last_name);
					authFact.setAccessToken(data.data.authentication);
					$location.url('/wall');
			}
		});
	};


	$scope.logout = function(){
		$scope.user_id = "";
		$scope.user_name = "";
		usersFactory.logout();
		$location.url('/')
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

myApp.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
});

myApp.constant('USER_ROLES', {
  all: '*',
  admin: 'admin',
  editor: 'editor',
  guest: 'guest'
});
