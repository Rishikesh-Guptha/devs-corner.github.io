// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAREgKC7y97RtBDpoEJipzB-nHO1FMj06c",
  authDomain: "devs-corner.firebaseapp.com",
  projectId: "devs-corner",
  storageBucket: "devs-corner.appspot.com",
  messagingSenderId: "132396261453",
  appId: "1:132396261453:web:28c42e0fcfdc0a4d8c7c04",
  measurementId: "G-VBHHBDN0DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db =getFirestore(app);
export const auth = getAuth(app);
export const gprovider=new GoogleAuthProvider();
export default app;
