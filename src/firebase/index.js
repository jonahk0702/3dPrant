import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN4s3K1lR-xhdaRaAa7F8ISEM4Tc0PLn0",
  authDomain: "dprant-2d951.firebaseapp.com",
  projectId: "dprant-2d951",
  storageBucket: "dprant-2d951.appspot.com",
  messagingSenderId: "63272332863",
  appId: "1:63272332863:web:ce8b6ef81842bb5138528a",
  measurementId: "G-1MTXBZ7E85"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();

export { storage, firebase as default };