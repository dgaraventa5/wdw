app.controller('notificationController', ['$scope', '$location', '$routeParams', 'itemFactory', 'userFactory', 'eventFactory', function($scope, $location, $routeParams, itemFactory, userFactory, eventFactory){

	userFactory.getUserItems(function(items){
		$scope.user_items = items.user_items
		$scope.all_items = items.all_items



	});


}])