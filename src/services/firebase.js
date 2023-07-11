import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCadRwzKXjO394iltoEVvBtlsUJ5nD5IW0",
  authDomain: "chat-app-81522.firebaseapp.com",
  projectId: "chat-app-81522",
  storageBucket: "chat-app-81522.appspot.com",
  messagingSenderId: "342673256133",
  appId: "1:342673256133:web:e828239e8ede48f5790aac"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
