app.factory('eventFactory', function($http){
	var factory = {}

	factory.getEvents = function(callback){
		$http({
			method:"GET",
			url:"/events"
		})
		.then(function successCallback(res){
			callback(res.data)
		})
	}

	factory.getEvent = function(event_id, callback){
		var src = "/event/"+event_id
		$http({
			method:"GET",
			url:src
		})
		.then(function successCallback(res){
			callback(res.data)
		})
	}
	factory.getAttendees = function(event_id, callback){
		var src = "/event/attendees/"+event_id
		$http({
			method:"GET",
			url:src
		})
		.then(function successCallback(res){
			callback(res.data)
		})
	}

	factory.newEvent = function(event, callback){
		event.image = "/assets/images/sunglassesemoji.png";
		console.log(event.image);
		$http({
			method:"POST",
			url:"/event",
			data:event
		})
		.then(function successCallback(res){
			callback(res.data)
		})
	}

	factory.editEvent = function(event_id, event, callback){
		src= "/event/"+event_id
		$http({
			method:"POST",
			url:src,
			data:event
		})
		.then(function successCallback(res){
			callback(res.data)
		})
	}

	factory.updateAttendees = function(event_id, atn_array, callback){
		src = "/event/attendees/"+event_id
		$http({
			method:"POST",
			url:src,
			data:{attendees:atn_array}
		})
		.then(function successCallback(res){
			callback()
		})
	}
	factory.addAdmins = function(event_id, adm_array, callback){
		src = "/event/admins/"+event_id
		$http({
			method:"POST",
			url:src,
			data:{admins:adm_array}
		})
		.then(function successCallback(res){
			callback()
		})
	}
	factory.updateImage = function(event_id, image_url, callback){
		src = "/event/image/"+event_id
		$http({
			method:"POST",
			url:src,
			data:{image:image_url}
		})
		.then(function successCallback(res){
			callback()
		})
	}

	factory.deleteEvent = function(event_id, callback){
		src = "/event/delete/"+event_id
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