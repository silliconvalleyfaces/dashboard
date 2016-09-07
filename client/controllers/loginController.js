myApp.controller('loginController', function($scope, $location, $window, $timeout, $cookies, authFact, postsFactory, usersFactory){
$scope.register = function (){
  console.log("*** front-end indexController -- $scope.register ***");
  console.log('new_user information', $scope.new_user);
  usersFactory.createUser($scope.new_user, function(data){
    // console.log(data);
    if(data.data.isLoggedIn){

      // console.log("data.data: ", data.data);
        // authFact.setUserCookieId(data.data.userCookie._id);
        authFact.setUserCookie(data.data.userCookie._id, data.data.userCookie.first_name, data.data.userCookie.last_name, data.data.userCookie.email);

        authFact.setAccessToken(data.data.authentication);
        $location.url('/wall');
        // $window.location.reload();
    }
    else if(data.data.status === 500){
      $scope.errorMsg = data.data.message;
    }
  });
};

$scope.login = function (){
  // console.log("*** front-end indexController -- $scope.login ***");
  // console.log('login information', $scope.loginInfo);
  usersFactory.login($scope.loginInfo, function (data){
    console.log("usersFactory.login", data);
        if (data.data.status === 500){
        $scope.errorMsg = data.data.message;
    }
    else if(data.data.status === 200){
        // authFact.setUserCookieId(data.data.userCookie._id);
        console.log('authFact.setUserCookie');
        authFact.setUserCookie(data.data.userCookie._id, data.data.userCookie.first_name, data.data.userCookie.last_name, data.data.userCookie.email);
        authFact.setAccessToken(data.data.authentication);
        $location.url('/wall');
        // $window.location.reload();
    }
  });
};



});
