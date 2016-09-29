app.controller('loginRegController', ['$scope', '$location', 'userFactory', function($scope, $location, userFactory){

	$scope.login = function(){

		var config = {
		    apiKey: "AIzaSyBRpe1EFepTXOwGSHLSZt-0uxZGLzNsxvk",
		    authDomain: "whos-doing-what.firebaseapp.com",
		    databaseURL: "https://whos-doing-what.firebaseio.com",
		    storageBucket: "whos-doing-what.appspot.com",
		    messagingSenderId: "668145295350"
		};
		firebase.initializeApp(config);
		var provider = new firebase.auth.FacebookAuthProvider();
		// provider.addScope('user_managed_groups');
		// provider.addScope('user_events');
		// provider.addScope('user_photos');
		provider.addScope('user_friends');
		// provider.addScope('read_custom_friendlists');
		provider.addScope('public_profile');
		
		firebase.auth().signInWithPopup(provider).then(function(result) {
		  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
		  var token = result.credential.accessToken;
		  // The signed-in user info.
		  var user = result.user.providerData[0];

		  userFactory.login(user, function(){
		  	$location.path("/")
		  })

		}).catch(function(error) {
		  // Handle Errors here.
		  console.log(error);
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  // ...
		});
	}
}]);