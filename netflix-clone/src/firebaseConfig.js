// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXfxqUY0RlskQByVimUQLL8VIZ1T9vP5w",
  authDomain: "netflix-clone-f200f.firebaseapp.com",
  projectId: "netflix-clone-f200f",
  storageBucket: "netflix-clone-f200f.appspot.com",
  messagingSenderId: "49753006440",
  appId: "1:49753006440:web:b555f3f70050b74a9536dd",
  measurementId: "G-GMK4BR1Y7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);