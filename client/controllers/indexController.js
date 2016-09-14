myApp.controller('indexController', function($scope, $rootScope, $location, $window, $timeout, $cookies, $sce, authFact, postsFactory, usersFactory){
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

	$scope.trustSrc = function(src){
		return $sce.trustAsResourceUrl(src);
	};

	//#######################################################
	//use the following code if any conflict occurred
	// Check if user data is in cookies and assign user data to $rootScope.user
	if(authFact.getUserCookie()){
		console.log("@~@~@~@~@ got user cookies");
		$rootScope.user = userCookie.user;
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

 	$scope.grabPost = function(index){
 		$scope.grabbedPost = index
 		console.log("grabbed post",$scope.grabbedPost)
 	};

 	//edit post
 	$scope.editPost = function(_id, title, url, urlVideo, text){
		console.log("$scope.editProfile - editing the post with _id: ", _id);
		$scope.editPost = {
			"_id": _id,
			"title": title,
			"url": url,
			"urlVideo": urlVideo,
			"text": text
		};
		console.log("*** made it to editPost ***");
		console.log("$scope.editPost: ", $scope.editPost);
		postsFactory.updatePost($scope.editPost, function(data){
			console.log(data);
			$scope.post = null;
			console.log('DATA BACK', data.data);
			
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
