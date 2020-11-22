import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCnn7YHmcgoFUrIn-uNl8ZZvJQ-NImtLog",
  authDomain: "dg3-db.firebaseapp.com",
  databaseURL: "https://dg3-db.firebaseio.com",
  projectId: "dg3-db",
  storageBucket: "dg3-db.appspot.com",
  messagingSenderId: "414214371477",
  appId: "1:414214371477:web:2fd54e9f1dcc5dbb4f039c",
  measurementId: "G-N563L7S1NR",
};

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters ({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;