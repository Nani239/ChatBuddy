// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , signInWithPhoneNumber} from "firebase/auth";
import {getFirestore}from 'firebase/firestore'
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
export default app;
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore
export { auth, db, analytics,signInWithPhoneNumber };
