app.controller('chooseEventPhotoController', ['$scope', '$location', '$routeParams', 'eventFactory', 'userFactory', 'itemFactory', function($scope, $location, $routeParams, eventFactory, userFactory, itemFactory){

	$scope.images = [
		{
			name: 'sunglassesemoji.png',
			url: '/assets/images/sunglassesemoji.png'
		},
		{
			name: 'fireomgemoji.jpg',
			url: '/assets/images/fireomgemoji.jpg'
		},
		{
			name: 'birthdayparty.jpg',
			url: '/assets/images/birthdayparty.jpg'
		},
		{
			name: 'firetracksemoji.png',
			url: '/assets/images/firetracksemoji.png'
		},
		{
			name: 'pineapplesandsunshine.jpg',
			url: '/assets/images/pineapplesandsunshine.jpg'
		},
		{
			name: 'pizzaemoji.jpg',
			url: '/assets/images/pizzaemoji.jpg'
		},
		{
			name: 'pool.jpeg',
			url: '/assets/images/pool.jpeg'
		},
		{
			name: 'popcornandicecream.png',
			url: '/assets/images/popcornandicecream.png'
		},
		{
			name: 'princessemoji.jpg',
			url: '/assets/images/princessemoji.jpg'
		},
		{
			name: 'tailgate.jpg',
			url: '/assets/images/tailgate.jpg'
		},
		{
			name: 'tailgate_pic.jpg',
			url: '/assets/images/tailgate_pic.jpg'
		},
		{
			name: 'campingtrip.jpg',
			url: '/assets/images/campingtrip.jpg'
		}
	]

	eventFactory.getEvent($routeParams.eid, function(event){
		$scope.event = event
		$scope.chosen_image = $scope.event.image
	});

	$scope.selectPhoto = function(url){
		$scope.chosen_image = "/assets/images/" + url;
		console.log($scope.image);
	}

	$scope.updateImage = function(){
		eventFactory.updateImage($routeParams.eid, $scope.chosen_image, function(){
			$location.path("/event/" + $routeParams.eid);
		});
	}




}]);