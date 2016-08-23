var postsController = require('../controllers/posts.js')

module.exports = function(app){

	app.post('/posts', function(req, res){

		postsController.makePost(req, res);
	})

	// app.get('/posts', function(req, res){

	// 	postsController.getPosts(req, res);
	// })
}