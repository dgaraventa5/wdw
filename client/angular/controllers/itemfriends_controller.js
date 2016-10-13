app.controller('itemfriendsController', ['$scope', '$location', '$routeParams', 'itemFactory', 'userFactory', 'eventFactory', function($scope, $location, $routeParams, itemFactory, userFactory, eventFactory){
	itemFactory.getItem($routeParams.iid, function(item){
		$scope.item = item
		eventFactory.getAttendees($scope.item._event, function(attendees){
			$scope.attendees = attendees
		})
		// for (var i=0; i<$scope.item._users.length; i++){
		// 	console.log($scope.item._users[i].name);
		// }
	})
	
	$scope.userAssigned = function(user, item_users){
		for (var i = 0; i < item_users.length; i++){
			if (item_users[i]._id == user._id){
				return true;
			}
		}
		return false;
	}
	$scope.assignAllFriends = function(){
		$scope.item._users = [];
		for(var i=0 ; i < $scope.attendees.length; i++){
			$scope.item._users.push($scope.attendees[i]);
		}
	}
	$scope.unassignAllFriends = function(){
		$scope.item._users = [];
	}

	$scope.addToUsers = function(user){
		$scope.item._users.push(user)
	}
	$scope.removeFromUsers = function(user){
		for(var i=0 ; i < $scope.item._users.length ; i++){
			if ($scope.item._users[i]._id == user._id){
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