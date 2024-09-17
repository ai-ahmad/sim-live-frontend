<<<<<<< HEAD
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO5Y0nxihY3x_WvFlrHNU1dz3diDKfrTE",
  authDomain: "life-sim-94a63.firebaseapp.com",
  projectId: "life-sim-94a63",
  storageBucket: "life-sim-94a63.appspot.com",
  messagingSenderId: "752614498677",
  appId: "1:752614498677:web:732f2ede3d87c3d465733c",
  measurementId: "G-DYKSVFTGV2",
=======
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyB1pUd_MtqXBOovx4OMrwqO0GrZFa78IZs",
  authDomain: "auth-33989.firebaseapp.com",
  projectId: "auth-33989",
  storageBucket: "auth-33989.appspot.com",
  messagingSenderId: "1072491142946",
  appId: "1:1072491142946:web:0cc73a7dddf2d88b69cf7b",
  measurementId: "G-3PF9729SRM"
>>>>>>> c66f66da36d15c2ad88ff5d6e9bd0a2adfbb418f
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
<<<<<<< HEAD
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Проверка поддержки Analytics и инициализация
let analytics;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

// Экспорт необходимых модулей
export { auth, googleProvider, analytics };
=======

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const signInWithPopupFunc = signInWithPopup;
>>>>>>> c66f66da36d15c2ad88ff5d6e9bd0a2adfbb418f
