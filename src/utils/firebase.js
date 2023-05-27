import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqXq7AdKYOgMXBhlZx7lZTpDzgMopJKNA",
  authDomain: "openai-179fb.firebaseapp.com",
  databaseURL: "https://openai-179fb-default-rtdb.firebaseio.com",
  projectId: "openai-179fb",
  storageBucket: "openai-179fb.appspot.com",
  messagingSenderId: "375821848904",
  appId: "1:375821848904:web:d6a2f39e618b5d64afe37d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
