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
    return authFact;
});
