import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC87D7AAQyUGmjr6gwAEMv7xuX-Ni824o4",
  authDomain: "full-firebase-react2023.firebaseapp.com",
  projectId: "full-firebase-react2023",
  storageBucket: "full-firebase-react2023.appspot.com", //gs://full-firebase-react2023.appspot.com
  messagingSenderId: "770542546287",
  appId: "1:770542546287:web:fd36376f1185b8695d8c9a",
  measurementId: "G-0E7PZB9BHM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
