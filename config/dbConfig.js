import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAD6FrZT5QqBTIvS8-HBzNC1T5wNGbrAE",
  authDomain: "capstone-react-jobie.firebaseapp.com",
  projectId: "capstone-react-jobie",
  storageBucket: "capstone-react-jobie.appspot.com",
  messagingSenderId: "519897798533",
  appId: "1:519897798533:web:e658f997be067cadc3d6ec",
  measurementId: "G-468DW16S80",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default app;
