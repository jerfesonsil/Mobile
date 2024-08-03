// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW6PUT-lFgtZnU8fRemS3098vPWH1TgJ4",
  authDomain: "juntai-97fb7.firebaseapp.com",
  projectId: "juntai-97fb7",
  storageBucket: "juntai-97fb7.appspot.com",
  messagingSenderId: "992508616254",
  appId: "1:992508616254:web:b353992eabd722d27b7b6f",
  measurementId: "G-3CYRJPPWNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
