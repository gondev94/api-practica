// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpE0uoPX_wZRfBCm2mA822R8Jh4kP3Fsg",
  authDomain: "api-rest-node-dd8cb.firebaseapp.com",
  projectId: "api-rest-node-dd8cb",
  storageBucket: "api-rest-node-dd8cb.firebasestorage.app",
  messagingSenderId: "819599312196",
  appId: "1:819599312196:web:6a19167c14c7784f024311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }


