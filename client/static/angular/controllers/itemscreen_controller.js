app.controller('itemScreenController', ['$scope', '$location', '$routeParams', 'eventFactory', 'userFactory', 'itemFactory', function($scope, $location, $routeParams, eventFactory, userFactory, itemFactory){

	itemFactory.getItem($routeParams.iid, function(item){
		$scope.currentUserAssigned = false;
		$scope.item = item;
		//get event
		eventFactory.getEvent(item._event, function(event){
			$scope.event = event;
			//get current user
			userFactory.getCurrentUser(function(user){
				$scope.current_user = user;
			});
		});
	});
	

	//need to create new controller method to remove other users
	$scope.removeMe = function(item_id){
		itemFactory.removeMe(item_id, function(){
			itemFactory.getItem($routeParams.iid, function(item){
				$scope.item = item;
			});
		});
	}
	$scope.removeUser = function(user, item_id){
		itemFactory.removeUser(user._id, item_id, function(){
			itemFactory.getItem($routeParams.iid, function(item){
				$scope.item = item;
			});
		});
	}
}]);  