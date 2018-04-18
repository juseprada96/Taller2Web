import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDAYq5rKIZ7JW2JLws5CdSoLUpBfmz7dNE",
    authDomain: "hotelsearch-79fa0.firebaseapp.com",
    databaseURL: "https://hotelsearch-79fa0.firebaseio.com",
    projectId: "hotelsearch-79fa0",
    storageBucket: "hotelsearch-79fa0.appspot.com",
    messagingSenderId: "623243495027"
  };
firebase.initializeApp(config);
export default firebase;