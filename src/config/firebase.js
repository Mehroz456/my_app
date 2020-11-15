import firebase from 'firebase/app'
import 'firebase/database';
import'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDegBFA7A-obEpr3JT43jMXWyC2jRtdO-o",
    authDomain: "todo-app-3cdc0.firebaseapp.com",
    databaseURL: "https://todo-app-3cdc0.firebaseio.com",
    projectId: "todo-app-3cdc0",
    storageBucket: "todo-app-3cdc0.appspot.com",
    messagingSenderId: "146540241560",
    appId: "1:146540241560:web:c22aec67b153dec743a6ed",
    measurementId: "G-KVTY90PZDQ"
  };
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
