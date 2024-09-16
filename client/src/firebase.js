// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-5c14a.firebaseapp.com",
  projectId: "mern-auth-5c14a",
  storageBucket: "mern-auth-5c14a.appspot.com",
  messagingSenderId: "482814548747",
  appId: "1:482814548747:web:774901c33432d34034200e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
