// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDiS6ha4eyyq9yhIATQjsPmrJiCrV7XnW8",
    authDomain: "parcial3-a267b.firebaseapp.com",
    projectId: "parcial3-a267b",
    storageBucket: "parcial3-a267b.firebasestorage.app",
    messagingSenderId: "535262102482",
    appId: "1:535262102482:web:7778ebb9fd58f970003e0b",
    measurementId: "G-KTJQQBYXQQ"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore
export const db = getFirestore(app);
