// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8QT-67OoW7ZIjfjWYkOJ-TkLUrsGaSvo",
  authDomain: "netflix-gpt-c5ce1.firebaseapp.com",
  projectId: "netflix-gpt-c5ce1",
  storageBucket: "netflix-gpt-c5ce1.appspot.com",
  messagingSenderId: "754720730852",
  appId: "1:754720730852:web:d1c6cf7cb622bdb6a9c6f1",
  measurementId: "G-SFW5MFB4SQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
