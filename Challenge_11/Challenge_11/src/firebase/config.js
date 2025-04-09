
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKnuTRSuUNpfG2uwlVKH7VpBwcrVsrFDI",
  authDomain: "fir-e2-d745f.firebaseapp.com",
  projectId: "fir-e2-d745f",
  storageBucket: "fir-e2-d745f.firebasestorage.app",
  messagingSenderId: "469618773552",
  appId: "1:469618773552:web:ad466ad01bd35e43d167f5",
  measurementId: "G-DSP45SLJ11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };