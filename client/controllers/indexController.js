myApp.controller('indexController', function($scope, $rootScope, $location, $window, $timeout, $cookies, $sce, authFact, postsFactory, usersFactory, Upload, S3UploadService){

// the following code is for switching navbarLogin bars based on different routes. navbar files are in '/partials/navbarLogin.html'  and '/partials/navbarWall.html'
	// $scope.$on('$locationChangeSuccess', function($routeParams) {
  //       var path = $location.path();
  //       var product_id = $routeParams.product_id;
  //
  //       $scope.templateUrl = (path === '/' || path === '/login' || path === '/register') ? '/partials/navbarLogin.html' : '/partials/navbarWall.html';
  //   });
// End of switching navigation bar


	$scope.comment = {};

	var userCookie = authFact.getUserCookie();

	console.log('globla var userCookie: ', userCookie);
	console.log("rootScope: ", $rootScope);

	$scope.isLogged = function (){
		return authFact.getAccessToken();
	};

	$scope.trustSrc = function(src){
		return $sce.trustAsResourceUrl(src);
	};

	//#######################################################
	//use the following code if any conflict occurred
	// Check if user data is in cookies and assign user data to $rootScope.user
	if(authFact.getUserCookie()){
		console.log("@~@~@~@~@ got user cookies");
		$rootScope.user = userCookie.user;
		$rootScope.user.url = 'https://s3-us-west-1.amazonaws.com/siliconvalleyfaces/'+userCookie.user._id+'.jpg'
	}
	//#######################################################
	//use the above code if any conflict occurred


	refreshPosts = function (){
		postsFactory.getPosts(function(data){
	 		console.log(data);
	 		$scope.posts = data;
	 	});
	};

	postsFactory.getPosts(function(data){
 		console.log(data);
 		$scope.posts = data;

 	});

	$scope.feed = true;
	// $scope.posts = [];
	$scope.search = {};

	$scope.reset = function(){
		postsFactory.getPosts(function(data){
	 		// console.log(data);
	 		$scope.posts = data;
	 		$scope.feed = true;
	 		$scope.search.text = null;
	 	});

	}


	$scope.addPost = function(user_id){
 		$scope.post._user_id = user_id;
 		postsFactory.addPost($scope.post, function(data){
			console.log("postsFactory.addPost(", data);
			$scope.post = null;
			// $scope.posts.unshift(data.data);
			console.log('DATA BACK', data.data);
			refreshPosts();
 		});
 	};

 	$scope.deletePost = function(postId){
 		postsFactory.deletePost(postId, function(status){
 			postsFactory.getPosts(function(data){
		 		// console.log(data);
		 		$scope.posts = data;
		 	});
 		});
 	};

	$scope.flagPost = function(postId){
		console.log("flag post pressed",postId);
 		postsFactory.flagPost(postId, function(status){
 			postsFactory.getPosts(function(data){
		 		// console.log(data);
		 		$scope.posts = data;
		 	});
 		});
 	};

 	$scope.searchPosts = function(search){
 		// console.log('at the searchPosts controller function');
 		postsFactory.searchPosts(search, function(data){
 			// console.log("search results:", data);
 			$scope.posts = data;
 			$scope.feed = false;
 		});
 	};

//#######################################################
//use the following code if any conflict occurred
 	$scope.commentPost = function(postId){
		console.log("$scope.commentPost - postId = ", postId);
		console.log("$scope.commentPost - $scope.comment[postId] = ", $scope.comment[postId]);
		console.log("$scope.commentPost - $scope.comment[postId].text = ", $scope.comment[postId].text);
 		var commentData = {
 			text: $scope.comment[postId].text,
 			_user_name: $rootScope.user.first_name+ " "+$rootScope.user.last_name ,
 			_user: $rootScope.user._id,
 			_post : postId,
 		};

//#######################################################
//use the following code if any conflict occurred		
 		postsFactory.commentPost(commentData, function(){
			refreshPosts();
			$scope.comment = {};
 		});
 	};
//use the above code if any conflict occurred
//#######################################################

 	$scope.deleteComment = function(commentId){
 		postsFactory.deleteComment(commentId, function(status){
 			// console.log('status deleting comment:', status);
 			postsFactory.getPosts(function(dat){
	 			// console.log('THIS ARE THE POSTS',dat);
	 			$scope.posts = dat;
	 		});
 		});
 	};

//#######################################################
//use the following code if any conflict occurred
	$scope.editProfile = function(user_id, first_name, last_name, user_email, phone){
		console.log("$scope.editProfile - editing the user with user_id: ", user_id);
		$scope.edit = {
			"user_id": user_id,
			"first_name": first_name,
			"last_name": last_name,
			"email": user_email,
			"phone": phone
		};
		console.log("*** made it to editProfile ***");
		console.log("$scope.edit: ", $scope.edit);
		// console.log("edit.phone:", $scope.edit.phoneShare);
		// console.log("edit.phone:", $scope.edit.emailShare);
		usersFactory.updateUser($scope.edit, function(data){
			console.log(data);
			$cookies.remove('userCookie');
			authFact.setUserCookie(data.data._id, data.data.first_name, data.data.last_name, data.data.email, data.data.phone);
			authFact.getUserCookie();
			console.log('after edit user -- $rootScope.user: ', $rootScope.user);
		});
	}
//use the above code if any conflict occurred
//#######################################################


//##############################################
// Login and Register
//##############################################

	$scope.logout = function(){

	  $rootScope.user_id = 	undefined;
		$rootScope.user = undefined;
		// $rootScope = {};
		console.log('before the user logout = ', $rootScope);
	  // usersFactory.logout();
		$cookies.remove('accessToken');
		$cookies.remove('userCookie');
		// $window.localStorage.clear();
		console.log('*!*! user is login out $rootScope = ', $rootScope);
	  $location.url('/login');
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

 	$scope.removeProfile = function(userId){
		usersFactory.deleteUser(userId, function(data){
			console.log('removed this user:', data);
			$location.url('/login');
		});
	};
	// upload image functionality
	//################################


    $scope.uploadFiles = function (files) {
        // console.log($scope.user);
        console.log(files[0]); 
        files[0].url = $scope.user._id+'.jpg';
        console.log(files);
        $scope.Files = files;
        console.log($scope.Files);

        if (files && files.length > 0) {
            angular.forEach($scope.Files, function (file, key) {
                S3UploadService.Upload(file).then(function (result) {
                    // Mark as success
                    file.Success = true;
                }, function (error)  {
                    // Mark the error
                    $scope.Error = error;
                }, function (progress) {
                    // Write the progress as a percentage
                    file.Progress = (progress.loaded / progress.total) * 100
                });
            });
        }

        usersFactory.uploadPhoto($scope.user._id, function(data){
            console.log(data);

        })
        setTimeout(function(){
        	location.reload()	
        }, 1200)
        





    };
    //#########################ENDS##############


});

myApp.filter('trusted', ['$sce', function ($sce){
	return function(url){
		console.log('this is url', url)
		var video_id = url.split('v=')[1];
		return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + video_id);
	}
}]);

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
