import ReactNative from "react-native";
import * as firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAc4942DlUtLeVGMNRXEqy0Wp3Y1MNANlM",
    authDomain: "lets-play-b5ce7.firebaseapp.com",
    databaseURL: "https://lets-play-b5ce7.firebaseio.com",
    projectId: "lets-play-b5ce7",
    storageBucket: "lets-play-b5ce7.appspot.com",
    messagingSenderId: "225024271194"
  };

  firebase.initializeApp(config);
} catch (e) {
  console.log(e);
}

export let facebookProvider = new firebase.auth.FacebookAuthProvider();
export let firebaseRef = firebase.database();
export default firebase;