import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1JNIQ-RjZ3fLdaxURwvdKk800pmMB7P8",
  authDomain: "signinwithgoogel.firebaseapp.com",
  projectId: "signinwithgoogel",
  storageBucket: "signinwithgoogel.firebasestorage.app",
  messagingSenderId: "1092246162440",
  appId: "1:1092246162440:web:67e1b5e0ee87f2849d15bd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;