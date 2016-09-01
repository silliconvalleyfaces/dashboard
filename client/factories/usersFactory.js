myApp.factory('usersFactory', function ($http, $cookies){
    var users = [];
    var factory = {};
// get logged in user information
      factory.index = function (callback){
        $http.get('/userInformation')
        .then(function (data){
          callback(data);
        });
      };

      factory.createUser = function (userInfo, callback){
        console.log("*** front-end usersFactory.js -- factory.createUser ***");
        console.log(userInfo);
        $http.post('/createUser', userInfo)
        .then(function(data){
          callback(data);
        });
      };

      factory.updateUser = function (userInfo, callback){
        console.log("*** front-end usersFactory.js -- factory.createUser ***");
        console.log(userInfo);
        $http.post('/updateUser', userInfo)
        .then(function(data){
          callback(data);
        });
      };
      factory.login = function (userInfo, callback){
        console.log("*** front-end usersFactory.js -- factory.login***");
        console.log(userInfo);
        $http.post('/login', userInfo)
        .then(function (data){
          callback(data);
        });
      };
      factory.logout = function (){
        $http.get('/logout')
        .then(function (){
          $cookies.remove('accessToken');
          $cookies.remove('userObj');
        });
      };
      factory.searchUsers = function (UserName, callback) {
        console.log("*** front-end usersFactory.js -- factory.searchUsers***");
        console.log(UserName);
        $http.post('/usersearch',UserName)
        .then(function (data) {
          callback(data);
        });
      };

      factory.getUsers = function(callback){
        console.log('get users, users factory');
        $http.get('/users').then(function(data){
          callback(data);
        });
      };
      factory.deleteUser = function(userId, callback){
        console.log('deleteuser at factory', userId)
        $http.post('/users/' + userId + '/destroy').then(function(data){
          if(data.error){
            callback(data);
          } else {
            callback(data);
          }
        })
      }

    return factory;
});
