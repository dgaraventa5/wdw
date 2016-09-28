app.controller('itemfriendsController', ['$scope', '$location', '$routeParams', 'itemFactory', 'userFactory', 'eventFactory', function($scope, $location, $routeParams, itemFactory, userFactory, eventFactory){
	itemFactory.getItem($routeParams.iid, function(item){
		$scope.item = item
		eventFactory.getAttendees($scope.item._event, function(attendees){
			$scope.attendees = attendees
		})
	})

	$scope.addToUsers = function(user_id){
		$scope.item._users.push(user_id)
	}
	$scope.removeFromUsers = function(user_id){
		for(var i=0 ; i < $scope.item._users.length ; i++){
			if ($scope.item._users[i] == user_id){
				$scope.item._users.splice(i,1)
			}
		}
	}

	$scope.updateUsers = function(){
		itemFactory.updateUsers($routeParams.iid, $scope.item._users, function(){
			$location.path("/event/"+$scope.item._event)
		})
	}
}])