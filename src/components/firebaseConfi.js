// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCii7lirEo6fr_K90t3-xyjDHezA28gnKI",
  authDomain: "myapp-dce58.firebaseapp.com",
  projectId: "myapp-dce58",
  storageBucket: "myapp-dce58.firebasestorage.app",
  messagingSenderId: "89274696661",
  appId: "1:89274696661:web:8e6dc0e052fd541ef8f35c",
  measurementId: "G-MLGEZ27E4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);