myApp.controller('indexController', function($scope, Upload, $location, $window, $timeout, $cookies, authFact, postsFactory, usersFactory){
//upload photo s3 api

    $scope.submit = function(){ //function to call on form submit
        if ($scope.upload_form.file.$valid && $scope.file) { //check if from is valid
            $scope.upload($scope.file); //call upload function
        }
    }
    
    $scope.upload = function (file) {
        console.log(file); 

        Upload.upload({
            url: '/upload', //webAPI exposed to upload the file
            data:{file:file} //pass file as data, should be user ng-model
        }).then(function (resp) { //upload function returns a promise
            if(resp.data.error_code === 0){ //validate success
                $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
            } else {
                $window.alert('an error occured');
            }
        }, function (resp) { //catch error
            console.log('Error status: ' + resp.status);
            $window.alert('Error status: ' + resp.status);
        }, function (evt) { 
            console.log(evt);
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            $scope.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
        });
    };





































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

	$scope.userStatus = false;
	$scope.comment = {};
	$scope.isLogged = function (){
		return authFact.getAccessToken();
	};
	console.log("$scope.isLogged()", $scope.isLogged() );
	usersFactory.index(function (data){
		$scope.loggedInUser = data;
		$scope.edit = data.data[0];
		console.log("data.data[0]",data.data[0]);
		if($scope.loggedInUser.data.length > 0){
			$scope.userStatus = true;
			$scope.user_id = data.data[0]._id;
			$scope.user_name = data.data[0].first_name + " " + data.data[0].last_name;
		}
		console.log('$scope.loggedInUser', $scope.loggedInUser);
		console.log('$scope.user_id', $scope.user_id);

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
					authFact.setAccessToken(data.data.authentication);
					$location.url('/wall');
			}
		});
	};

	$scope.logout = function(){
		// $cookies.remove('accessToken');
		// $cookies.remove('userObj');
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
