import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFMcYIfiuECGTvLdEEGd9KqEwtJ8wg3Vk",
  authDomain: "jott-bc1d2.firebaseapp.com",
  projectId: "jott-bc1d2",
  storageBucket: "jott-bc1d2.appspot.com",
  messagingSenderId: "978026800615",
  appId: "1:978026800615:web:094c2234e38389d9c28942",
  measurementId: "G-BYNYTVKNXT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);