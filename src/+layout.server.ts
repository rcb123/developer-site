// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDat-YK5-cYyvnDEShSfHSIxeBvWuvJOmk",
    authDomain: "developer-site-512c5.firebaseapp.com",
    projectId: "developer-site-512c5",
    storageBucket: "developer-site-512c5.appspot.com",
    messagingSenderId: "629867451527",
    appId: "1:629867451527:web:5c40de675eb3b42bbd1422",
    measurementId: "G-VGJVVQDVY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);