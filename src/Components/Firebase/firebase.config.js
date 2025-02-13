// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx4XtOY8e6eVoGJht-TpcPUPNB4YAXhdg",
  authDomain: "news-portal-recap-b517a.firebaseapp.com",
  projectId: "news-portal-recap-b517a",
  storageBucket: "news-portal-recap-b517a.firebasestorage.app",
  messagingSenderId: "450415288248",
  appId: "1:450415288248:web:3e0aa6cdeee7f8b1f8f94d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;