// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO-0duNH4zNWd4WNhHURLN3gl8j3xhl90",
  authDomain: "netflixgpt-82834.firebaseapp.com",
  projectId: "netflixgpt-82834",
  storageBucket: "netflixgpt-82834.appspot.com",
  messagingSenderId: "597159719446",
  appId: "1:597159719446:web:a6c419083ead589386fb37",
  measurementId: "G-RKHJ637WL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
