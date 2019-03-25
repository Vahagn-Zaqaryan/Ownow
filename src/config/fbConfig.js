import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDoWDHw28k7eDOrc2h-R-BZfskAO7UvQJg",
    authDomain: "projectyepp.firebaseapp.com",
    databaseURL: "https://projectyepp.firebaseio.com",
    projectId: "projectyepp",
    storageBucket: "",
    messagingSenderId: "401525756077"
  };

  firebase.initializeApp(config);

  export default firebase;
