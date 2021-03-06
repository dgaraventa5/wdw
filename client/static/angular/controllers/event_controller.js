app.controller('eventController', ['$scope', '$location', '$routeParams', 'eventFactory', 'userFactory', 'itemFactory', function($scope, $location, $routeParams, eventFactory, userFactory, itemFactory){
	if($routeParams.eid){
		eventFactory.getEvent($routeParams.eid, function(event){
			$scope.event = event
		})
		userFactory.getUsers(function(users){
			$scope.users = users
			console.log(users)
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

	$scope.addToAttendees = function(user_id){
		$scope.event._attendees.push(user_id)
	}
	$scope.removeFromAttendees = function(user_id){
		for(var i=0 ; i < $scope.event._attendees.length ; i++){
			if ($scope.event._attendees[i] == user_id){
				$scope.event._attendees.splice(i,1)
			}
		}
	}

	$scope.updateAttendees = function(){
		eventFactory.updateAttendees($routeParams.eid, $scope.event._attendees, function(){
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