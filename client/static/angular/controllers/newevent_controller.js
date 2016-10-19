app.controller('neweventController', ['$scope', '$location', '$routeParams', 'eventFactory', 'userFactory', 'itemFactory', function($scope, $location, $routeParams, eventFactory, userFactory, itemFactory){
	$scope.newEvent = function(){
		eventFactory.newEvent($scope.new_event, function(event){
			$location.path("/event/attendees/"+event._id)
		})
	}
	$scope.choosePic = function(){
		
	}
}])
