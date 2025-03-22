// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_pzi5lq_IXmlDSdV2xuFgc2m4cddsMWc",
  authDomain: "interactive-doc-manager.firebaseapp.com",
  projectId: "interactive-doc-manager",
  storageBucket: "interactive-doc-manager.firebasestorage.app",
  messagingSenderId: "522461266218",
  appId: "1:522461266218:web:e2a98706e3734d706e9e53",
  measurementId: "G-XJWY4D7Q61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);