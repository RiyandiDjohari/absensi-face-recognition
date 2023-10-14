// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDInpBKm7IfPU73yxGmkp2GLHZN4SQt1Ng",
  authDomain: "absensi-fr.firebaseapp.com",
  projectId: "absensi-fr",
  storageBucket: "absensi-fr.appspot.com",
  messagingSenderId: "603311507434",
  appId: "1:603311507434:web:5d97f25d777594fd6ed493"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "gs://absensi-fr.appspot.com");

export { storage };