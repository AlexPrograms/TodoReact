import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
const API_KEY:string= import.meta.env.VITE_API_KEY;

interface IfirebaseConfig{
    apiKey:string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

// ADD YOUR firebaseConfig

const firebaseConfig:IfirebaseConfig = {
  apiKey: API_KEY,
  authDomain: "reactapp-8f840.firebaseapp.com",
  projectId: "reactapp-8f840",
  storageBucket: "reactapp-8f840.appspot.com",
  messagingSenderId: "648396021488",
  appId: "1:648396021488:web:af9c1c8a71939aee432c35"
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();