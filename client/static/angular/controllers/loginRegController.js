app.controller('loginRegController', ['$scope', '$location', 'userFactory', function($scope, $location, userFactory){

	$scope.login = function(){
		  userFactory.login(function(){
		  	$location.path("/")
		  })
	}
}]); 