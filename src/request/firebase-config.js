import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnvnLPzJzDlJfbQRAb4JRLrUIypeDZy0U",
  authDomain: "lessoninitproject.firebaseapp.com",
  projectId: "lessoninitproject",
  storageBucket: "lessoninitproject.appspot.com",
  messagingSenderId: "297250618695",
  appId: "1:297250618695:web:cd99e0bc2dcda8fd59e062",
  measurementId: "G-CXWE8GBM6Q",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getDatabase(app);
export const auth = getAuth(app);

