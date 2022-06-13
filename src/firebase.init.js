// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdT7N6LuAS8LVr0sRtQWDmz4bV_MN99PM",
  authDomain: "ema-jhone-firebase-integra.firebaseapp.com",
  projectId: "ema-jhone-firebase-integra",
  storageBucket: "ema-jhone-firebase-integra.appspot.com",
  messagingSenderId: "209241514864",
  appId: "1:209241514864:web:14a64852c96ed0d73125b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;