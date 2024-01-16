import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMFxrH5_DjHp_GmE8rQ0bUF2UOGpb7dOk",
  authDomain: "vizualize-e52ab.firebaseapp.com",
  projectId: "vizualize-e52ab",
  storageBucket: "vizualize-e52ab.appspot.com",
  messagingSenderId: "983951216821",
  appId: "1:983951216821:web:f28b142d6088e65d472efc",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, storage, timestamp };
