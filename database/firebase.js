import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDxq6mrk4tcjyinpHlh4HZQLmr4ewQPZtM",
  authDomain: "test-4d493.firebaseapp.com",
  databaseURL: "https://test-4d493-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-4d493",
  storageBucket: "test-4d493.appspot.com",
  messagingSenderId: "266221728601",
  appId: "1:266221728601:web:74623dd5c91e38c782d248",
  measurementId: "G-ZM9RZBQV64"
};
  export const firebaseApp=firebase.initializeApp(FIREBASE_CONFIG)
  // export const googleprovider=new firebase.auth.GoogleAuthProvider()
  export default firebaseApp.firestore()