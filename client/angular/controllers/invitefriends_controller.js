app.controller('invitefriendsController', ['$scope', '$location', '$routeParams', 'eventFactory', 'userFactory', 'itemFactory', function($scope, $location, $routeParams, eventFactory, userFactory, itemFactory){
	eventFactory.getEvent($routeParams.eid, function(event){
		$scope.event = event
	})
	userFactory.getUsers(function(users){
		$scope.users = users
		console.log(users)
	})
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
			$location.path("/event/photo/" + $routeParams.eid);
		});
	}
}])