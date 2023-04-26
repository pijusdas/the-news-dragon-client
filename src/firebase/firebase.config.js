// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4JbdCkA8t9IdqCUG5glRFeZhoSh4y5m8",
  authDomain: "the-news-dragon-20fac.firebaseapp.com",
  projectId: "the-news-dragon-20fac",
  storageBucket: "the-news-dragon-20fac.appspot.com",
  messagingSenderId: "42621607804",
  appId: "1:42621607804:web:1887088abd96c726c68ef9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;