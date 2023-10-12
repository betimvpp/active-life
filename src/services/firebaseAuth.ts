// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAytxrrSTPWnr_H7N81pjd3y4Qbes-wpXM",
  authDomain: "active-life-396017.firebaseapp.com",
  projectId: "active-life-396017",
  storageBucket: "active-life-396017.appspot.com",
  messagingSenderId: "181646125277",
  appId: "1:181646125277:web:063d0b9626ec474d311334",
  measurementId: "G-KKPH0NJGY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// collection ref
