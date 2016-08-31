myApp.factory('authFact', function ($http, $cookies){
    var users = [];
    var authFact = {};

    authFact.setAccessToken = function (accessToken){
      $cookies.put('accessToken', accessToken);
    };
    authFact.getAccessToken = function (){
      authFact.authToken = $cookies.get('accessToken');
      return authFact.authToken;
    };
    authFact.getUser = function (){
      var userCookie = $cookies.get('userCookie');
        if(userCookie){
          console.log('return userObj from cookie: ', userCookie);
          return userCookie;
        }
        else{
          console.log('user object not found!');
        }
    };
    return authFact;
});
