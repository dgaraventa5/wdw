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
	$scope.itemCheck = function(users){
		for(var i = 0 ; i < users.length ; i++){
			if (users[i]._id == $scope.current_user._id){
				return false
			}
		}
		return true
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
}])