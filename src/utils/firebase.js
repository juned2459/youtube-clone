// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUDV5pEoz4ivi5zkmDzfLYPZaIDhSYwXs",
  authDomain: "netflixgpt-10322.firebaseapp.com",
  projectId: "netflixgpt-10322",
  storageBucket: "netflixgpt-10322.appspot.com",
  messagingSenderId: "386926983283",
  appId: "1:386926983283:web:98bec213f81973dab75206",
  measurementId: "G-QRVYTXXY4R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
