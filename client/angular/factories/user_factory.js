app.factory('userFactory', function($http){
	var factory = {}

	factory.getUsers = function(callback){
		$http({
			method:"GET",
			url: '/users'
		})
		.then(function successCallback(res){
			callback(res.data)
		})
	}

	factory.getUpcoming = function(callback){
		$http({
			method:"GET",
			url:"/user/upcoming"
		})
		.then(function successCallback(res){
			callback(res.data)
		})
	}
	
	factory.getUserItems = function(callback){
		$http({
			method:"GET",
			url:"/user/items"
		})
		.then(function successCallback(res){
			callback(res.data)
		})
	}

	factory.getUser = function(user_id, callback){
		var src = "/user/"+user_id
		$http({
			method:"GET",
			url:src
		})
		.then(function successCallback(res){
			callback(res.data)
		})
	}

	factory.newUser = function(user, callback){
		$http({
			method:"POST",
			url:"/user",
			data:user
		})
		.then(function successCallback(res){
			callback(res.data)
		})
	}

	return factory
})