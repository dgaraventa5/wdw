app.controller('eventController', ['$scope', '$location', '$routeParams', 'eventFactory', 'userFactory', 'itemFactory', function($scope, $location, $routeParams, eventFactory, userFactory, itemFactory){
	if($routeParams.eid){
		eventFactory.getEvent($routeParams.eid, function(event){
			$scope.event = event
		})
		userFactory.getUsers(function(users){
			$scope.users = users
		})
		itemFactory.getEventItems($routeParams.eid, function(items){
			$scope.event_items = items
		})
	}

	$scope.getEvents = function(){
		eventFactory.getEvents(function(events){
			$scope.events = events
		})
	}

	$scope.getEvent = function(event_id){
		$location.path("/event/"+event_id)
	}

	$scope.newEvent = function(){
		eventFactory.newEvent($scope.new_event, function(event){
			$location.path("/event/attendees/"+event._id)
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

	$scope.newItem = function(){
		itemFactory.newItem($routeParams.eid, $scope.new_item, function(){
			itemFactory.getEventItems($routeParams.eid, function(items){
				$scope.event_items = items
			})
		})
	}

	$scope.deleteEvent = function(){
		eventFactory.deleteEvent($routeParams.eid, function(){
			$location.path("/events")
		})
	}

}])