import * as firebase from 'firebase';
import 'firebase/firestore'

const app = firebase.initializeApp(  {
  apiKey: "AIzaSyA313fw1rXHN5CMgEUd-JN79fQNd3ev2jQ",
  authDomain: "event-28e2d.firebaseapp.com",
  projectId: "event-28e2d",
  storageBucket: "event-28e2d.appspot.com",
  messagingSenderId: "906601495656",
  appId: "1:906601495656:web:5805702534596cc2fdcfdd"
}
)
//initializing the firestore
export const fireDB = app.firestore()
export const auth = app.auth()
export default app;