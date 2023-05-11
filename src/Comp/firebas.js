// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHPvfEVSy8iDVpbv7E3kZlUUvdZWACAN8",
  authDomain: "listedcorp-95cd7.firebaseapp.com",
  projectId: "listedcorp-95cd7",
  storageBucket: "listedcorp-95cd7.appspot.com",
  messagingSenderId: "831024653048",
  appId: "1:831024653048:web:2be5e2e432ece0926a110d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);