app.controller('itemController', ['$scope', '$location', '$routeParams', 'itemFactory', 'userFactory', 'eventFactory', function($scope, $location, $routeParams, itemFactory, userFactory, eventFactory){
	if($routeParams.iid){
		itemFactory.getItem($routeParams.iid, function(item){
			$scope.item = item
			eventFactory.getAttendees($scope.item._event, function(attendees){
				$scope.attendees = attendees
			})
		})
	}
	if($routeParams.eid){
		itemFactory.getEventItems($routeParams.eid, function(items){
			$scope.event_items = event_item
		})
	}

	$scope.newItem = function(){
		itemFactory.newItem($routeParams.eid, $scope.new_item, function(){
			$location.path("/event/"+$routeParams.eid)
		})
	}

	$scope.editItem = function(){
		itemFactory.editItem($routeParams.iid, $scope.edit_item, function(){
			$location.path("/item/"+$routeParams.iid)
		})
	}

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

	$scope.removeUser = function(user_id){
		itemFactory.removeUser($routeParams.iid, user_id, function(){
			$location.path("/item/"+$routeParams.iid)
		})
	}
	
}])