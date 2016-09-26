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


