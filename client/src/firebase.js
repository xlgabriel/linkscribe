// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoBIZ95p4DotHdQ9BHmPz_n9p0PclcCOk",
    authDomain: "linkscribe-30eb1.firebaseapp.com",
    projectId: "linkscribe-30eb1",
    storageBucket: "linkscribe-30eb1.appspot.com",
    messagingSenderId: "916843014202",
    appId: "1:916843014202:web:f22d5f3599e85fd77b6d03",
    measurementId: "G-TJC8R30SHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);