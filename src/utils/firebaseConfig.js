import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG2RuhdrPQvB4LunmwD4c0rWS8lfX1nS8",
  authDomain: "ecommerceevc.firebaseapp.com",
  projectId: "ecommerceevc",
  storageBucket: "ecommerceevc.appspot.com",
  messagingSenderId: "766433227701",
  appId: "1:766433227701:web:6d8dd60423b9658ea21ffc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;