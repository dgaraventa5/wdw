app.controller('eventscreenController', ['$scope', '$location', '$routeParams', 'eventFactory', 'userFactory', 'itemFactory', function($scope, $location, $routeParams, eventFactory, userFactory, itemFactory){
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

	$scope.newItem = function(){
		itemFactory.newItem($routeParams.eid, $scope.new_item, function(){
			itemFactory.getEventItems($routeParams.eid, function(items){
				$scope.event_items = items
			})
		})
	}
}])