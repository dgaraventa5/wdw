app.controller('usereventsController', ['$scope', '$location', '$routeParams', 'userFactory', function($scope, $location, $routeParams, userFactory){
	userFactory.getUser($routeParams.uid, function(user){
		$scope.user = user
	})
	userFactory.getUpcoming(function(events){
		$scope.user_events = events
	})
	userFactory.getUserItems(function(items){
		$scope.user_items = items.user_items
		$scope.all_items = items.all_items
		console.log(items)
	})

	$scope.upcomingFilter = function(prop){
		return function(item){
			var event_date = new Date(item[prop])
			var today = new Date()

			if(event_date >= today){
				return true
			}else{
				return false
			}
		}
	}
	$scope.pastFilter = function(prop){
		return function(item){
			var event_date = new Date(item[prop])
			var today = new Date()

			if(event_date < today){
				return true
			}else{
				return false
			}
		}
	}
	$scope.getEvent = function(event_id){
		$location.path("/event/"+event_id)
	}
}])