myApp.controller('indexController', function($scope, $rootScope, $location, $window, $timeout, $cookies, authFact, postsFactory, usersFactory){
//upload photo s3 api

    // $scope.submit = function(){ //function to call on form submit
    //     if ($scope.upload_form.file.$valid && $scope.file) { //check if from is valid
    //         $scope.upload($scope.file); //call upload function
    //     }
    // }

    // $scope.upload = function (file) {
    //     console.log(file);

    //     Upload.upload({
    //         url: '/upload', //webAPI exposed to upload the file
    //         data:{file:file} //pass file as data, should be user ng-model
    //     }).then(function (resp) { //upload function returns a promise
    //         if(resp.data.error_code === 0){ //validate success
    //             $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
    //         } else {
    //             $window.alert('an error occured');
    //         }
    //     }, function (resp) { //catch error
    //         console.log('Error status: ' + resp.status);
    //         $window.alert('Error status: ' + resp.status);
    //     }, function (evt) {
    //         console.log(evt);
    //         var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
    //         console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    //         $scope.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
    //     });
    // };


// $scope.uploadPic = function(file) {
// 	console.log(file)
//     file.upload = Upload.upload({
//       url: '/upload',
//       data: {file: file},
//     });
//     file.upload.then(function (response) {
//       $timeout(function () {
//         file.result = response.data;
//       });
//     }, function (response) {
//       if (response.status > 0)
//         $scope.errorMsg = response.status + ': ' + response.data;
//     }, function (evt) {
//       // Math.min is to fix IE which reports 200% sometimes
//       file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
//     });
// }
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


	if(authFact.getUserCookie()){
		// var userCookie = authFact.getUserCookie();
		// console.log("var userCookie = authFact.getUserCookie() = ", userCookie);
		// console.log(userCookie.user._id);
		// console.log(userCookie.user.first_name);
		// console.log(userCookie.user.last_name);
		// console.log(userCookie.user.email);
		$rootScope.user_id = 	userCookie.user._id;
		$rootScope.user_name = userCookie.user.first_name + " " + userCookie.user.last_name;
		$rootScope.first_name = userCookie.user.first_name ;
		$rootScope.last_name = userCookie.user.last_name;
		$rootScope.user_email = userCookie.user.email;
		$rootScope.phone = userCookie.user.phone;

		// console.log("$scope.user_id = ",$scope.user_id);
		// console.log("$scope.user_name = ", $scope.user_name);
		// console.log("$scope.user_email = ", $scope.user_email);
	}


	// usersFactory.index(function (data){
	// 	$scope.loggedInUser = data;
	// 	if($scope.loggedInUser.data.length > 0){
	// 		$scope.userStatus = true;
	// 		$scope.user_id = 	authFact.getUserCookieId();
	// 		$scope.user_name = data.data[0].first_name + " " + data.data[0].last_name;
	// 	}
	// 	console.log('$scope.loggedInUser', $scope.loggedInUser);
	// 	console.log('$scope.user_id', $scope.user_id);
	//
	// });
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
		// console.log("user_id", user_id);
 	// 	console.log('$rootScope.user_id;', $rootScope.user_id);
 		$scope.post._user_id = user_id;
 		postsFactory.addPost($scope.post, function(data){
			console.log("postsFactory.addPost(", data);
			$scope.post = null;
			// $scope.posts.unshift(data.data);
			console.log('DATA BACK', data.data);
			// postsFactory.getPosts(function(dat){
			// 		console.log('does this work?')
			// 		$scope.posts = dat;
			// 	});
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

 	$scope.searchPosts = function(search){
 		// console.log('at the searchPosts controller function');
 		postsFactory.searchPosts(search, function(data){
 			// console.log("search results:", data);
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
 		// console.log(commentData, "COMMENT DATA")
 		postsFactory.commentPost(commentData, function(data){
 			// console.log('back from commenting post', data);
 			postsFactory.getPosts(function(dat){
				$scope.comment = "";
	 			// console.log(data);
	 			$scope.posts = dat;
	 		});
 		});

 	};

 	$scope.deleteComment = function(commentId){
 		postsFactory.deleteComment(commentId, function(status){
 			// console.log('status deleting comment:', status);
 			postsFactory.getPosts(function(dat){
	 			// console.log('THIS ARE THE POSTS',dat);
	 			$scope.posts = dat;
	 		});
 		});
 	};

	$scope.editProfile = function(){
		$scope.edit = {
			"user_id": userCookie.user._id,
			"first_name": $scope.first_name,
			"last_name": $scope.last_name,
			"email": $scope.user_email,
			"phone": $scope.phone
		};

		console.log("*** made it to editProfile ***");
		console.log("$scope.edit: ", $scope.edit);
		// console.log("edit.phone:", $scope.edit.phoneShare);
		// console.log("edit.phone:", $scope.edit.emailShare);
		usersFactory.updateUser($scope.edit, function(data){
			console.log(data);
			$rootScope.user_id = 	data.data._id;
			$scope.user_name = data.data.first_name + " "+ data.data.last_name;
			$scope.first_name = data.data.first_name;
			$scope.last_name = data.data.last_name;
			$scope.user_email = data.data.email;
			console.log('after edit user,, $scope.user_id: ', $rootScope.user_id);
			// $cookies.remove('userCookie');
			// authFact.setUserCookie(data.data._id, data.data.first_name, data.data.last_name, data.data.email);
		});
	}

//##############################################
// Login and Register
//##############################################

	$scope.logout = function(){

	  // $rootScope.user_id = 	null;
	  // $rootScope.user_name = null;
	  // $rootScope.first_name = null;
	  // $rootScope.last_name = null;
	  // $rootScope.user_email = null;
		$rootScope = {};
		console.log('user is login out $rootScope = ', $rootScope);
	  usersFactory.logout();
	  $location.url('/');
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

 	$scope.removeProfile = function(userId){
		usersFactory.deleteUser(userId, function(data){
			console.log('removed this user:', data);
			$location.url('/');
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
