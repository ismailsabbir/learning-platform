// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  // apiKey: "AIzaSyA-bVvJjlhmJnJppc-93PWiH1pW99RPP0U",
  // authDomain: "learning-platform-94653.firebaseapp.com",
  // projectId: "learning-platform-94653",
  // storageBucket: "learning-platform-94653.appspot.com",
  // messagingSenderId: "733994662109",
  // appId: "1:733994662109:web:fef5cf9588e119eaea0334"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;