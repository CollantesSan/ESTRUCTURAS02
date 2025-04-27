// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCixqhRkmfFxrnNJyKfSXWAlT4fC819Lqo",
  authDomain: "mproyecto2.firebaseapp.com",
  projectId: "mproyecto2",
  storageBucket: "mproyecto2.firebasestorage.app",
  messagingSenderId: "994918075669",
  appId: "1:994918075669:web:735eebdcca2bd39e286d1c"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportamos servicios que usaremos
export const auth = getAuth(app);
export const db = getFirestore(app);