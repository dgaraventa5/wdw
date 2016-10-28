app.controller('invitefriendsController', ['$scope', '$location', '$routeParams', 'eventFactory', 'userFactory', 'itemFactory', function($scope, $location, $routeParams, eventFactory, userFactory, itemFactory){
	eventFactory.getEvent($routeParams.eid, function(event){
		$scope.event = event 
	})
	userFactory.getUsers(function(users){
		$scope.users = users
	})
	userFactory.getCurrentUser(function(user){
		$scope.user = user;
		//get all users
		userFactory.getUsers(function(users){
			$scope.users = users
			//do FB API call to get the users friends
			userFactory.getUserFriends(user.fbid, function(friends){
				$scope.friends = [];
				for (var i=0; i<friends.data.length; i++){
					// friends.data[i].fbid = friends.data[i].id;
					$scope.friends.push(friends.data[i]);
				}
				var current_user = {
					id: user.fbid,
					name: user.name
				}
				$scope.friends.push(current_user);
				console.log($scope.friends);
				//compare the array of all users and array of FB friends
				var bool;
				for (var i=0; i < $scope.users.length; i++){
					bool = false;
					for(var j=0; j<$scope.friends.length; j++){
						if ($scope.users[i].fbid == $scope.friends[j].id) {
							bool = true;
						}
					}
					if (bool == false) {
						$scope.users[i].splice(i,1);
					}
				}
			});
		});
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
	$scope.allFriends = function(){
		$scope.event._attendees = []
		for(var i=0 ; i < $scope.users.length ; i++){
			$scope.event._attendees.push($scope.users[i]._id)
		}
	}
	$scope.uninviteAllFriends = function(){
		$scope.event._attendees = [];
		$scope.event._attendees.push($scope.event._host._id);
	}
	$scope.updateAttendees = function(){
		eventFactory.updateAttendees($routeParams.eid, $scope.event._attendees, function(){
			$location.path("/event/" + $routeParams.eid);
		});
	}
}])