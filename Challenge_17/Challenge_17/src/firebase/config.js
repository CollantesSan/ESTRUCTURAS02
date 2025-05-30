// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDKnuTRSuUNpfG2uwlVKH7VpBwcrVsrFDI",
  authDomain: "fir-e2-d745f.firebaseapp.com",
  databaseURL: "https://fir-e2-d745f-default-rtdb.firebaseio.com",
  projectId: "fir-e2-d745f",
  storageBucket: "fir-e2-d745f.appspot.com", // ← CORREGIDO
  messagingSenderId: "469618773552",
  appId: "1:469618773552:web:ad466ad01bd35e43d167f5",
  measurementId: "G-DSP45SLJ11"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(); // ← AÑADIDO

export { auth, db, provider };

