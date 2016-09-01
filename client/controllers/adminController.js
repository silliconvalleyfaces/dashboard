myApp.controller('adminController', function($scope, $location, $window, $timeout, $cookies, authFact, postsFactory, usersFactory){

	console.log('ADMIN CONTROLLEr');
	$scope.users = [];
	$scope.flaggedPosts = [];

	// postsFactory.getFlaggedPosts = function(data){
	// 	$scope.flaggedPosts = data;
	// };

	usersFactory.getUsers(function(data){
		console.log('THIS ARE THE USERS:',data);
		$scope.users = data.data;
	});



});