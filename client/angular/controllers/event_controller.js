app.controller('eventController', ['$scope', '$location', '$routeParams', 'eventFactory', 'userFactory', function($scope, $location, $routeParams, eventFactory, userFactory){
	if($routeParams.eid){
		eventFactory.getEvent($routeParams.eid, function(event){
			$scope.event = event
		})
		userFactory.getUsers(function(users){
			$scope.users = users
		})
	}

	$scope.getEvents = function(){
		eventFactory.getEvents(function(events){
			$scope.events = events
		})
	}

	$scope.newEvent = function(){
		eventFactory.newEvent($scope.new_event, function(event){
			$location.path("/event/"+event._id)
		})
	}

	$scope.editEvent = function(){
		eventFactory.editEvent($routeParams.eid, $scope.edit_event, function(event){
			$location.path("/event/"+event._id)
		})
	}

	$scope.addAttendees = function(){
		eventFactory.addAttendees($routeParams.eid, $scope.new_attendees, function(){
			$location.path("/event/"+$routeParams.eid)
		})
	}

	$scope.addAdmins = function(){
		eventFactory.addAdmins($routeParams.eid, $scope.new_admins, function(){
			$location.path("/event/"+$routeParams.eid)
		})
	}

	$scope.deleteEvent = function(){
		eventFactory.deleteEvent($routeParams.eid, function(){
			$location.path("/events")
		})
	}
	
}])