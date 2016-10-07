app.controller('itemScreenController', ['$scope', '$location', '$routeParams', 'eventFactory', 'userFactory', 'itemFactory', function($scope, $location, $routeParams, eventFactory, userFactory, itemFactory){

	itemFactory.getItem($routeParams.iid, function(item){
		$scope.item = item;
	});
}])