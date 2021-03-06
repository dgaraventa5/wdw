app.controller('eventscreenController', ['$scope', '$location', '$routeParams', 'eventFactory', 'userFactory', 'itemFactory', function($scope, $location, $routeParams, eventFactory, userFactory, itemFactory){
	eventFactory.getEvent($routeParams.eid, function(event){
		$scope.event = event
		$scope.style = {
			'background-image' : 'url('+$scope.event.image+')'
		}
	})
	userFactory.getUsers(function(users){
		$scope.users = users
	})
	userFactory.getCurrentUser(function(user){
		$scope.current_user = user 
	})
	itemFactory.getEventItems($routeParams.eid, function(items){
		$scope.event_items = items
	})

	$scope.newItem = function(){
		itemFactory.newItem($routeParams.eid, $scope.new_item, function(){
			itemFactory.getEventItems($routeParams.eid, function(items){
				$scope.event_items = items
				$scope.new_item = null
			})
		})
	}
	$scope.assignMe = function(item_id){
		itemFactory.assignMe(item_id, function(){
			itemFactory.getEventItems($routeParams.eid, function(items){
				$scope.event_items = items
			})
		})
	}
	$scope.removeMe = function(item_id){
		itemFactory.removeMe(item_id, function(){
			itemFactory.getEventItems($routeParams.eid, function(items){
				$scope.event_items = items
			})
		})
	}
	$scope.userAssigned = function(user, item_users){

		if (item_users.length > 0) {
			for (var i=0; i < item_users.length; i++){
				if (item_users[i]._id == user._id) {
					return true;
				}
			}
		}
		return false;
	}

	$scope.completeItem = function(item_id){
		itemFactory.completeItem(item_id, function(){
			itemFactory.getEventItems($routeParams.eid, function(items){
				$scope.event_items = items
			})
		})
	}
	$scope.uncompleteItem = function(item_id){
		itemFactory.uncompleteItem(item_id, function(){
			itemFactory.getEventItems($routeParams.eid, function(items){
				$scope.event_items = items
			})
		})
	}
	$scope.changeImage = function(){
		$location.path("/event/photo/" + $routeParams.eid);
	}
	$scope.showItem = function(item_id){
		$location.path("item/" + item_id);
	}
}])