// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK3SW3NSyrvTBqHKYp0ed1peRMCMDeEPo",
  authDomain: "doctors-portal-afb28.firebaseapp.com",
  projectId: "doctors-portal-afb28",
  storageBucket: "doctors-portal-afb28.appspot.com",
  messagingSenderId: "870510357003",
  appId: "1:870510357003:web:4b78082e87a0223cb4350e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;