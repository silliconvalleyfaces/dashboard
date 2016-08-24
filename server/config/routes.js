var postsController = require('../controllers/posts.js')
 
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
}