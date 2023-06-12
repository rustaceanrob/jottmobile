import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// config object here

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);