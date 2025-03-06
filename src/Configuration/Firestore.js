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
  apiKey: import.meta.env.VITE_Firebase_API_KEY,
  authDomain: import.meta.env.VITE_Firebse_Auth_Domain,
  projectId: import.meta.env.VITE_Firebase_Project_Id,
  storageBucket: import.meta.env.VITE_Firebase_Storage_Bucket,
  messagingSenderId: import.meta.env.VITE_Firebase_Messaging_Sender_Id,
  appId: import.meta.env.VITE_Firebase_App_Id,
  measurementId: import.meta.env.VITE_Firebase_Measurement,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

const analytics = getAnalytics(app);

export const firestore = getFirestore(app);