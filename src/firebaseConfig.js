// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYGklbLWFIHiVk62nta7kNRbpk9tDRv8A",
  authDomain: "mentorq-pro.firebaseapp.com",
  projectId: "mentorq-pro",
  storageBucket: "mentorq-pro.firebasestorage.app",
  messagingSenderId: "87903291093",
  appId: "1:87903291093:web:c5699f70a32c351ee4445c",
  measurementId: "G-YPVXFPNRR5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app); // 🆕 Firestore

export { auth, db };
