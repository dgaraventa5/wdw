app.controller('chooseEventPhotoController', ['$scope', '$location', '$routeParams', 'eventFactory', 'userFactory', 'itemFactory', function($scope, $location, $routeParams, eventFactory, userFactory, itemFactory){

	eventFactory.getEvent($routeParams.eid, function(event){
		$scope.event = event;
		$scope.image = $scope.event.image;
	});

	$scope.selectPhoto = function(url){
		$scope.image = "/assets/images/" + url;
		console.log($scope.image);
	}

	$scope.updateImage = function(){
		eventFactory.updateImage($routeParams.eid, $scope.image, function(){
			$location.path("/event/" + $routeParams.eid);
		});
	}




}]);