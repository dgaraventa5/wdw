app.controller('userprofileController', ['$scope', '$location', '$routeParams', 'eventFactory', 'userFactory', 'itemFactory', function($scope, $location, $routeParams, eventFactory, userFactory, itemFactory){
	userFactory.getCurrentUser(function(user){
		$scope.current_user = user
	})

	$scope.updateUser = function(field){
		console.log($scope.current_user)
		userFactory.updateUser($scope.current_user, field, function(user){
			$scope.current_user = user
		})
	}
}])