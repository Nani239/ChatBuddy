// firebaseConfig.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA25i6aDl8l7QHhO2bRSeRMan-5z3RhKa8",
  authDomain: "chatting-app-81499.firebaseapp.com",
  projectId: "chatting-app-81499",
  storageBucket: "chatting-app-81499.appspot.com",
  messagingSenderId: "45158523354",
  appId: "1:45158523354:web:5f47c3a7871654eb12e0e3",
  measurementId: "G-2VJ7K0JVZK",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export { firestore, firebase as default };
