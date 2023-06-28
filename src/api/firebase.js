import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ecrire-app.firebaseapp.com",
  projectId: "ecrire-app",
  storageBucket: "ecrire-app.appspot.com",
  messagingSenderId: "1092404674556",
  appId: "1:1092404674556:web:2cbe72cee77b7e354a3c79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
