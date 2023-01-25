import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASRSG-X9KCME5J-sYNvUtAXMkWJFE_HIQ",
  authDomain: "react-crud-89c51.firebaseapp.com",
  projectId: "react-crud-89c51",
  storageBucket: "react-crud-89c51.appspot.com",
  messagingSenderId: "96020511729",
  appId: "1:96020511729:web:388ed35f836e4dea196250",
  measurementId: "G-JCEJK49YZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);