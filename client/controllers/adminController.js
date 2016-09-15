myApp.controller('adminController', function($scope, $location, $window, $timeout, $cookies, authFact, postsFactory, usersFactory){

	console.log('ADMIN CONTROLLEr');
	$scope.users = [];
	$scope.flaggedPosts = [];

	postsFactory.getFlaggedPosts(function(data){
		console.log(data);
		$scope.flaggedPosts = data;
	});

	usersFactory.getUsers(function(data){
		console.log('THIS IS ALL THE USERS:',data);
		$scope.users = data.data;
	});

	$scope.deleteUser = function(userId){
		usersFactory.deleteUser(userId, function(data){
			console.log('removed this user:', data);
			usersFactory.getUsers(function(dat){
				console.log('THIS ARE THE USERS:',dat);
				$scope.users = dat.data;
			});
		});
	};


});
