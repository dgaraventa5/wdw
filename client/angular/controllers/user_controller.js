app.controller('userController', ['$scope', '$location', '$routeParams', 'userFactory', function($scope, $location, $routeParams, userFactory){
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

	if($routeParams.uid){
		userFactory.getUser($routeParams.uid, function(user){
			$scope.user = user
		})
	}

	userFactory.getUpcoming(function(events){
		$scope.user_events = events
	})
	userFactory.getUserItems(function(items){
		$scope.user_items = items.user_items
		$scope.all_items = items.all_items
		console.log(items)
	})
	
	$scope.getUser = function(user_id){
		$location.path('/user/'+user_id)
	}

	$scope.getUpcoming = function(){
		userFactory.getUpcoming(function(events){
			$scope.user_events = events
		})
	}

	$scope.getUserItems = function(){
		userFactory.getUserItems(function(items){
			$scope.user_items = items.user_items
			$scope.all_items = items.all_items
		})
	}

	$scope.getEvent = function(event_id){
		$location.path("/event/"+event_id)
	}

	$scope.newUser = function(){
		userFactory.newUser($scope.new_user, function(user){
			$scope.current_user = user
		})
	}

}])