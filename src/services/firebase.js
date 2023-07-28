import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-ecrire.firebaseapp.com",
  projectId: "react-ecrire",
  storageBucket: "react-ecrire.appspot.com",
  messagingSenderId: "849224639330",
  appId: "1:849224639330:web:3df7d8de48b2aba8ba823b",
};

//initialize firebase
const app = initializeApp(firebaseConfig);
//initialize firestore
export const database = getFirestore(app);
//initialize auth
export const auth = getAuth(app);
