import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// Import the functions you need from the SDKs you need
const firebaseConfig = {
    apiKey: "AIzaSyCByZfPtDS9Napz8krEoOAPKQkwiFJEPIM",
    authDomain: "wikipedia-dc023.firebaseapp.com",
    projectId: "wikipedia-dc023",
    storageBucket: "wikipedia-dc023.appspot.com",
    messagingSenderId: "518374085678",
    appId: "1:518374085678:web:a46015b862b21f3babbbbf"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}