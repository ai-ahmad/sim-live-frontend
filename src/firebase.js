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
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
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
