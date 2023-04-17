import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADTENLzWSPkje-_-tTF3rgMt-3fJeAQRc",
  authDomain: "allxone-auth.firebaseapp.com",
  projectId: "allxone-auth",
  storageBucket: "allxone-auth.appspot.com",
  messagingSenderId: "922716446922",
  appId: "1:922716446922:web:30bee686937fac8a251433",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
