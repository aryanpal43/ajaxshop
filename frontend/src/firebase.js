// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKs3NRX3Z3iHox8JPte-tnPAR_6zRGgug",
  authDomain: "otpajax1.firebaseapp.com",
  projectId: "otpajax1",
  storageBucket: "otpajax1.firebasestorage.app",
  messagingSenderId: "879041146955",
  appId: "1:879041146955:web:30a652da3ece5342991dce",
  measurementId: "G-W6V4H04XX5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
