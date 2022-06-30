import firebase from "firebase";

// These imports load individual services into the firebase namespace.
import "firebase/auth";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAlGIeIPjRT1mFyRLRaePpAglbSldOgFOE",
  authDomain: "clone-9e1d7.firebaseapp.com",
  projectId: "clone-9e1d7",
  storageBucket: "clone-9e1d7.appspot.com",
  messagingSenderId: "423638881812",
  appId: "1:423638881812:web:10d112d0a3e31fc44b7901",
  measurementId: "G-J52ZXK9ENT"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
