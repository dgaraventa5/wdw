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
	.otherwise({
		redirectTo: '/'
	});
});