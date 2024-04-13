// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1993f.firebaseapp.com",
  projectId: "mern-estate-1993f",
  storageBucket: "mern-estate-1993f.appspot.com",
  messagingSenderId: "334578167540",
  appId: "1:334578167540:web:c550459b4060b4da99f8a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);