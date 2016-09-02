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

    authFact.setUserCookieId = function(userCookieId){
      $cookies.put('userCookieId', userCookieId);
      console.log(userCookieId);
    };


    authFact.setUserCookie= function(_id, first_name, last_name){
      var userCookie = [_id, first_name, last_name];
      $cookies.put('userCookie', userCookie);
      console.log("authFact.setUserCookie", userCookie);
    };

    authFact.getUserCookie = function(){
      authFact.userCookie = $cookies.get('userCookie');
      console.log("  authFact.getUserCookie", authFact.userCookie);
      return authFact.userCookie ;
    };

    authFact.getUserCookieId = function(){
      authFact.user_id = $cookies.get('userCookieId');
      return authFact.user_id ;
    };

    return authFact;
});
