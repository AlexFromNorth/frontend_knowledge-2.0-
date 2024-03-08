import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnvnLPzJzDlJfbQRAb4JRLrUIypeDZy0U",
  authDomain: "lessoninitproject.firebaseapp.com",
  projectId: "lessoninitproject",
  storageBucket: "lessoninitproject.appspot.com",
  messagingSenderId: "297250618695",
  appId: "1:297250618695:web:cd99e0bc2dcda8fd59e062",
  measurementId: "G-CXWE8GBM6Q",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getCities = async (coll) => {
  const citiesCol = collection(db, coll);
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc);
  return cityList;
};
