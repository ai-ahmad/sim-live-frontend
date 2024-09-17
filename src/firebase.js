
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAO5Y0nxihY3x_WvFlrHNU1dz3diDKfrTE",
  authDomain: "life-sim-94a63.firebaseapp.com",
  projectId: "life-sim-94a63",
  storageBucket: "life-sim-94a63.appspot.com",
  messagingSenderId: "752614498677",
  appId: "1:752614498677:web:732f2ede3d87c3d465733c",
  measurementId: "G-DYKSVFTGV2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const signInWithPopupFunc = signInWithPopup;