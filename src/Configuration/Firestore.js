// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaLL0UxD5AFR5ayASDUZzHChd77DSLvz8",
  authDomain: "foodzzyy-7b23f.firebaseapp.com",
  projectId: "foodzzyy-7b23f",
  storageBucket: "foodzzyy-7b23f.firebasestorage.app",
  messagingSenderId: "821631539086",
  appId: "1:821631539086:web:bf5d78712ee833ab4c36df",
  measurementId: "G-6HP826WF9E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

const analytics = getAnalytics(app);

export const firestore = getFirestore(app);