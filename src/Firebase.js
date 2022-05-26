// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvGOL0pVqAcLKQRCNphq718xEvJUzf3LI",
  authDomain: "whatsapp-clone-9b628.firebaseapp.com",
  projectId: "whatsapp-clone-9b628",
  storageBucket: "whatsapp-clone-9b628.appspot.com",
  messagingSenderId: "443194278137",
  appId: "1:443194278137:web:41143a9837e9ea0191e228",
  measurementId: "G-D3XFX5QWMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);