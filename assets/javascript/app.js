// Initialize Firebase
var config = {
	apiKey: "AIzaSyDlrTYQNSFrLNN6kanphXPZYlOyWavN8cA",
	authDomain: "rps-database.firebaseapp.com",
	databaseURL: "https://rps-database.firebaseio.com",
	storageBucket: "",
};
firebase.initializeApp(config);
var database = firebase.database();