// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA14GEfU6rruJgWygBms13T5wP7_DCsyDo",
    authDomain: "ashpital-management.firebaseapp.com",
    projectId: "ashpital-management",
    storageBucket: "ashpital-management.appspot.com",
    messagingSenderId: "298108697775",
    appId: "1:298108697775:web:3dd640786a6f27b304685a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;