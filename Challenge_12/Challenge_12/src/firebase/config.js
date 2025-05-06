
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyDKnuTRSuUNpfG2uwlVKH7VpBwcrVsrFDI",
  authDomain: "fir-e2-d745f.firebaseapp.com",
  projectId: "fir-e2-d745f",
  storageBucket: "fir-e2-d745f.firebasestorage.app",
  messagingSenderId: "469618773552",
  appId: "1:469618773552:web:ad466ad01bd35e43d167f5",
  measurementId: "G-DSP45SLJ11"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); 


export { auth, db };

