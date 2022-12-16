import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB6H0aoR28WWPO4asVBIAsteZZe0KZfV1w",
  authDomain: "chat-bc226.firebaseapp.com",
  projectId: "chat-bc226",
  storageBucket: "chat-bc226.appspot.com",
  messagingSenderId: "323352329801",
  appId: "1:323352329801:web:6d0576d4f992f315dfc998",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
