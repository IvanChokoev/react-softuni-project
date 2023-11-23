// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDg0OwP-6c5HbibfMRpwT3czFJ7TZ5wzg",
    authDomain: "react-softuni-project-949c9.firebaseapp.com",
    projectId: "react-softuni-project-949c9",
    storageBucket: "react-softuni-project-949c9.appspot.com",
    messagingSenderId: "282818115734",
    appId: "1:282818115734:web:905b12b4ac881d48166ab7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
