// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// No use variable de entorno. me agarro panico jajajajaja
const firebaseConfig = {
  apiKey: "AIzaSyDWB9wEg1owNTKzgrrNT5yi8UWeb9w3AAk",
  authDomain: "simonetta-beru.firebaseapp.com",
  projectId: "simonetta-beru",
  storageBucket: "simonetta-beru.firebasestorage.app",
  messagingSenderId: "3357678115",
  appId: "1:3357678115:web:5a70ec740e886d10dcef96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportar la instancia de Firestore.
export const db = getFirestore(app)