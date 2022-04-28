import * as firebase from 'firebase';
import 'firebase/firestore'

firebase.initializeApp(  {
  apiKey: "AIzaSyDYameSVlXn82GRIk_ZH2fPDJIPPLhvoRI",
  authDomain: "event-app-ee791.firebaseapp.com",
  projectId: "event-app-ee791",
  storageBucket: "event-app-ee791.appspot.com",
  messagingSenderId: "73813753925",
  appId: "1:73813753925:web:a4eefe296c865552f5e32c"
}
)
const app = firebase

//initializing the firestore
export const fireDB = firebase.firestore()
export const auth = firebase.auth()
export default app;