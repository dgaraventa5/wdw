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

	factory.updateUsers = function(item_id, users, callback){
		var src = "/item/update_users/"+item_id
		$http({
			method:"POST",
			url:src,
			data: users
		})
		.then(function successCallback(res){
			callback()
		})
	}

	factory.assignMe = function(item_id, callback){
		var src = "item/assign_me/"+item_id
		$http({
			method:"POST",
			url:src
		})
		.then(function succesCallback(res){
			callback()
		})
	}

	factory.removeMe = function(item_id, callback){
		var src = "/item/remove_me/"+item_id
		$http({
			method:"POST",
			url:src
		})
		.then(function successCallback(res){
			callback()
		})
	}

	factory.completeItem = function(item_id, callback){
		var src = "/item/complete/"+item_id
		$http({
			method:"POST",
			url:src
		})
		.then(function successCallback(res){
			callback()
		})
	}

	factory.uncompleteItem = function(item_id, callback){
		var src = "/item/uncomplete/"+item_id
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