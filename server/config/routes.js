var postsController = require('../controllers/posts.js')
var usersController = require('../controllers/users.js')

 module.exports = function(app){

 	app.post('/posts', function(req, res){
 		postsController.makePost(req, res);
 	})

 	app.post('/search', function(req, res){
 		console.log('search posts query');
 		postsController.searchPosts(req, res);
 	})
 	app.get('/posts', function(req, res){
 		postsController.getPosts(req, res);
 	})
 	app.post('/posts/:id/destroy', function(req, res){
 		console.log('got to the destroy post route');
 		postsController.destroyPost(req, res);
 	})

  //#############################################
      // Users routes
  //#############################################
  app.post('/createUser', function (req,res){
    console.log('Back-end routes -- app.post /createUser ');
    console.log('req.body', req.body);
    // req.body.lastName  = first Name
    // req.body.firstName = last Name
    // req.body.email     = email
    // req.body.password  = user password
    console.log('req.session', req.session);
    usersController.createUser(req, res);
  });
  app.post('/login', function (req, res){
    console.log('Back-end routes -- app.post /login ');
    console.log('req.body', req.body);
    usersController.login(req, res);
  });
  app.get('/userInformation', function (req, res){
    console.log('Back-end routes -- app.get /userInformation ');
    console.log('req.body', req.body);
    usersController.userInformation(req, res);
  });
  app.get('/logout', function (req, res){
    console.log('Back-end routes -- app.get /logout ');
    console.log('req.body', req.body);
    usersController.logout(req, res);
  });
  // app.post('/silliconValleyFacesWall', function (req, res){
  //   console.log('Back-end routes -- app.get /silliconValleyFacesWall ');
  //   console.log('welcome to silliconValleyFacesWall');
  // });
}
