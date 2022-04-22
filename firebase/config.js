// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYameSVlXn82GRIk_ZH2fPDJIPPLhvoRI",
  authDomain: "event-app-ee791.firebaseapp.com",
  projectId: "event-app-ee791",
  storageBucket: "event-app-ee791.appspot.com",
  messagingSenderId: "73813753925",
  appId: "1:73813753925:web:a4eefe296c865552f5e32c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);