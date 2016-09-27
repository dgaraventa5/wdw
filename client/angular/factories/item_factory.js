app.factory('itemFactory', function($http){
	var factory = {}

	factory.getItem = function(item_id, callback){
		var src = "/item/"+item_id
		$http({
			method:"GET",
			url:src
		})
		.then(function successCallback(res){
			callback(res.data)
		})
	}

	factory.getEventItems = function(event_id, callback){
		var src = "/items/"+event_id
		$http({
			method:"GET",
			url:src
		})
		.then(function successCallback(res){
			callback(res.data)
		})
	}

	factory.newItem = function(event_id, item, callback){
		var src = "/item/"+event_id
		$http({
			method:"POST",
			url:src,
			data:item
		})
		.then(function successCallback(res){
			callback()
		})
	}

	factory.editItem = function(item_id, item, callback){
		var src = "/item/edit/"+item_id
		$http({
			method:"POST",
			url:src,
			data:item
		})
		.then(function successCallback(res){
			callback()
		})
	}

	factory.addUser = function(item_id, user_id, callback){
		var src = "/item/add_user/"+item_id+"/"+user_id
		$http({
			method:"POST",
			url:src
		})
		.then(function successCallback(res){
			callback()
		})
	}

	factory.removeUser = function(item_id, user_id, callback){
		var src = "/item/remove_user/"+item_id+"/"+user_id
		$http({
			method:"POST",
			url:src
		})
		.then(function successCallback(res){
			callback()
		})
	}

	return factory
})