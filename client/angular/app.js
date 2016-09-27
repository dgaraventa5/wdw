var app = angular.module('app', ['ngRoute', 'mobile-angular-ui']);
app.config(function($routeProvider, $httpProvider){
	$httpProvider.interceptors.push(
		function($q, $location){
			return{
				'responseError':function(rejection){
					if (rejection.status == 401) {
						$location.url('/');
					}
					return $q.reject(rejection);

				}	
			}
		}
	);
	$routeProvider
	.when('/',{
		templateUrl: 'partials/welcome.html'
	})
	.when('/loginreg',{
		templateUrl: 'partials/loginreg.html',
		controller: 'loginRegController'
	})
	.when('/events',{
		templateUrl: 'partials/users_events.html'
	})
	.when('/event/:id',{
		templateUrl: 'partials/eventscreen.html'
	})
	.when('/newevent',{
		templateUrl: 'partials/newevent.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});