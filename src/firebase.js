// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzMtIC00nhjNGloMrzEVdEDFS5da5Z2xM",
  authDomain: "fer-web2-spadz.firebaseapp.com",
  projectId: "fer-web2-spadz",
  storageBucket: "fer-web2-spadz.appspot.com",
  messagingSenderId: "366279373455",
  appId: "1:366279373455:web:d2527a9e34c6c110b676fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export default db