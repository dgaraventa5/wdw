app.controller('itemController', ['$scope', '$location', '$routeParams', 'itemFactory', 'userFactory', 'eventFactory', function($scope, $location, $routeParams, itemFactory, userFactory, eventFactory){
	if($routeParams.iid){
		itemFactory.getItem($routeParams.iid, function(item){
			$scope.item = item
		})
		eventFactory.getAttendees($scope.item._event._id, function(attendees){
			$scope.attendees = attendees
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
	$scope.addUser = function(user_id){
		itemFactory.addUser($routeParams.iid, user_id, function(){
			$location.path("/item/"+$routeParams.iid)
		})
	}
	$scope.removeUser = function(user_id){
		itemFactory.removeUser($routeParams.iid, user_id, function(){
			$location.path("/item/"+$routeParams.iid)
		})
	}
}])