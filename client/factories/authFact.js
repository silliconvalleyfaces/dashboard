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


    authFact.setUserCookie= function(_id, first_name, last_name, email, phone){
      var userCookie = {
        user:{  _id: _id,
                first_name: first_name,
                last_name: last_name,
                email: email,
                phone: phone
              }
          };
      $cookies.putObject('userCookie', userCookie);
      console.log("authFact.setUserCookie", userCookie);
    };

      //use the following code if any conflict occurred
    authFact.getUserCookie = function(){
      return $cookies.getObject('userCookie');
    };

    return authFact;
});
