import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "@firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXcE4INawmREhtIaIPS5RRue-NXahcPu0",
  authDomain: "pratibimbvjti-87666.firebaseapp.com",
  projectId: "pratibimbvjti-87666",
  storageBucket: "pratibimbvjti-87666.appspot.com",
  messagingSenderId: "708417597167",
  appId: "1:708417597167:web:7b1e9340bea5ee0995b51a",
};


const app = initializeApp(firebaseConfig);

export const fire = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
