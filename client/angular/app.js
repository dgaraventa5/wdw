var app = angular.module('app', ['ngRoute', 'ngTouch', 'mobile-angular-ui']);
app.config(function($routeProvider, $httpProvider, $touchProvider){
	$touchProvider.ngClickOverrideEnabled(true);

	$httpProvider.interceptors.push(
		function($q, $location){
			return{
				'responseError':function(rejection){
					if (rejection.status == 401) {
						$location.url('/login');
					}
					return $q.reject(rejection);
				}
			}
		}
	);

	$routeProvider
	.when('/', {
		redirectTo: '/events'
	})
	.when('/login',{
		templateUrl: 'partials/loginreg.html',
		controller: 'loginRegController'
	})
	.when('/events',{
		templateUrl: 'partials/userevents.html'
	})
	.when('/event/:eid',{
		templateUrl: 'partials/eventscreen.html'
	})
	.when('/newevent',{
		templateUrl: 'partials/newevent.html'
	})
	.when('/neweventinvitefriends',{
		templateUrl: 'partials/invitefriends.html'
	})
	.when('/event/photo/:eid',{
		templateUrl: 'partials/chooseeventphoto.html'
	})
	.when('/event/attendees/:eid',{
		templateUrl: 'partials/invitefriends.html'
	})
	.when('/notifications',{
		templateUrl: 'partials/notifications.html'
	})
	.when('/item/assign/:iid',{
		templateUrl: 'partials/itemfriends.html'
	})
	.when('/userprofile',{
		templateUrl: 'partials/userprofile.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});