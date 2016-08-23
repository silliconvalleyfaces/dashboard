myApp.factory('postsFactory', function($http){


	var posts = []

	var factory = {}

	// factory.getPosts = function(callback){
	// 	$http.get('/posts').then(function(data){
	// 		posts = data.data;
	// 		callback(data.data);
	// 	});
	// }

	factory.addPost = function(info, callback){
		console.log('info:', info)
		$http.post('/posts', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				callback(data);
			}
		})
	}

	return factory;
})