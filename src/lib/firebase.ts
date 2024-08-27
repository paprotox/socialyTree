import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCe73CUHD8CzV9vY5usHi3MMYaudRcsN3I",
    authDomain: "socialytree.firebaseapp.com",
    projectId: "socialytree",
    storageBucket: "socialytree.appspot.com",
    messagingSenderId: "915246281456",
    appId: "1:915246281456:web:645036f814df0eb1f68835",
    measurementId: "G-HHQYCEP4TB"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();


