var myApp = angular.module('Myapp', ['ngRoute']);

// We instantiate our application and we inject ngrouter so that it's available
// and so that we can use it to set up our routes below.



// this is our router. You can choose to set your controllers on the partial
// but I prefer to set my controllers here because it's cleaner
(function(){
	myApp.config(function($routeProvider){
		$routeProvider

			.when('/',
			{
				controller: 'indexController',
				templateUrl: "partials/login.html"
			})
			.when('/login',
			{
				controller: 'indexController',
				templateUrl: "partials/login.html"
			})
			.when('/register',
			{
				controller: 'indexController',
				templateUrl: "partials/register.html"
			})
      .when('/termsConditions',
			{
				controller: 'indexController',
				templateUrl: "partials/termsConditions.html"
			})
			.when('/wall',
			{
				controller: 'indexController',
				templateUrl: "partials/wall.html"
			})
			.otherwise({
	            redirectTo: '/'
	        });
	});
}());
