var myApp = angular.module('Myapp', ['ngRoute', 'ngCookies', 'ngFileUpload']);
// var usersController = require('../../ server/controllers/users.js');
// We instantiate our application and we inject ngrouter so that it's available
// and so that we can use it to set up our routes below.

//password validation
myApp.directive('validPasswordC', function() {
    return {
        require: 'ngModel',
        scope: {
            reference: '=validPasswordC'
        },
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function(viewValue, $scope) {

                var noMatch = viewValue != scope.reference;
                ctrl.$setValidity('noMatch', !noMatch);
                return (noMatch) ? noMatch : !noMatch;
            });

            scope.$watch("reference", function(value) {
                ctrl.$setValidity('noMatch', value === ctrl.$viewValue);

            });
        }
    };
});

// code for confirmation of delete users own profile
myApp.directive('ngReallyClick', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                var message = attrs.ngReallyMessage;
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngReallyClick);
                }
            });
        }
    }
}]);

// this is our router. You can choose to set your controllers on the partial
// but I prefer to set my controllers here because it's cleaner
(function() {
    myApp.config(function($routeProvider) {
        $routeProvider
            .when('/login', {
                controller: 'loginController',
                templateUrl: "partials/login.html"
            })
            .when('/register', {
                controller: 'loginController',
                templateUrl: "partials/register.html"
            })
            .when('/termsConditions', {
                controller: 'indexController',
                templateUrl: "partials/termsConditions.html"
            })
            .when('/admin', {
                controller: 'adminController',
                templateUrl: "partials/admin.html",
                authenticate: true
            })
            .when('/', {
                controller: 'indexController',
                templateUrl: "partials/index.html",
                authenticate: true
            })
            .when('/admin_login', {
                controller: 'admin_loginController',
                templateUrl: "partials/admin_login.html"
            })
            .otherwise({
                redirectTo: '/login'
            });
    });

}());

//This is for checking if the user is authenticated
myApp.run(["$rootScope", "$location", "authFact", function ($rootScope, $location, authFact){
  $rootScope.$on("$routeChangeStart", function (event, next, current){
    // console.log("evnet", event);
    // console.log("next", next);
    // console.log("current", current);
     /*if it is authenticated, the the user is able to see the page*/
     if(next.$$route.authenticate){
       console.log('require accessToken');
       var userAuth = authFact.getAccessToken();
       console.log('userAuth: ', userAuth);
       if(!userAuth){
         $location.path('/login');
       }

     }
  });
}]);
// End of checking if the user is authenticated
