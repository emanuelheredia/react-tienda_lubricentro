import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB6sN77HnmYTVsM66uhfTloWd4Jd1H7gTw",
    authDomain: "coder-ecommerce-19770.firebaseapp.com",
    projectId: "coder-ecommerce-19770",
    storageBucket: "coder-ecommerce-19770.appspot.com",
    messagingSenderId: "685204589376",
    appId: "1:685204589376:web:c9dc8cfdd131a4c2e208a5",
    measurementId: "G-QWZ87TWY48"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
