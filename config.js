// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYOIw6jYdyovXCDoqhgntab3vGtLJtSMs",
  authDomain: "programmatorenp.firebaseapp.com",
  projectId: "programmatorenp",
  storageBucket: "programmatorenp.appspot.com",
  messagingSenderId: "1045545181655",
  appId: "1:1045545181655:web:0898e63f353fcae027eb92",
  measurementId: "G-C4S460YL9L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
