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
  app.post('/posts/:id/edit', function(req, res){
    console.log('got to the edit post route', req.body);
    postsController.editPost(req, res);
  })
 	app.post('/posts/:id/destroy', function(req, res){
 		console.log('got to the destroy post route');
 		postsController.destroyPost(req, res);
 	})
  app.post('/posts/:id/flag', function(req, res){
 		console.log('got to the flag post route');
 		postsController.flagPost(req, res);
 	})
  app.post('/comments/:id/destroy', function(req, res){
    console.log('got to the destroy comment route');
    postsController.destroyComment(req, res);
  })

  app.post('/comments', function(req, res){
    console.log('got to the make a comment route');
    postsController.commentPost(req, res);
  })

  app.post('/updateUser', function (req,res) {
    console.log('req.body', req.body);
    usersController.updateUser(req, res);
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
  // app.get('/userInformation', function (req, res){
  //   console.log('Back-end routes -- app.get /userInformation ');
  //   console.log('req.body', req.body);
  //   usersController.userInformation(req, res);
  // });
  app.get('/logout', function (req, res){
    console.log('Back-end routes -- app.get /logout ');
    console.log('logout route -- req.body', req.body);

    usersController.logout(req, res);
  });
  app.post('/usersearch', function (req,res) {
    console.log('Back-end routes -- app.post /usersearch ');
    console.log('req.body', req.body);
    usersController.searchName(req, res);
  })
  app.get('/users', function (req, res){
    console.log('get users route');
    usersController.getUsers(req, res);
  });
  app.post('/users/:id/destroy', function(req, res){
    console.log('got to the destroy user route');
    usersController.destroyUser(req, res);
  })
  // app.post('/silliconValleyFacesWall', function (req, res){
  //   console.log('Back-end routes -- app.get /silliconValleyFacesWall ');
  //   console.log('welcome to silliconValleyFacesWall');
  // });


}
