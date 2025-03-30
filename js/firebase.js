// Import the functions you need from the SDKs you need
import { initializeApp } from "../../node_modules/firebase/firebase-app.js";
import { getAnalytics } from "../../node_modules/firebase/firebase-analytics.js";
// import { getAuth, createUserWithEmailAndPassword } from "../../node_modules/firebase/auth.js";
import { getFirestore, collection, addDoc } from "../../node_modules/firebase/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3-mBBCF4hjdvHPMprDeVTFAq7Xv3Z8XA",
    authDomain: "mentor-2bc9b.firebaseapp.com",
    projectId: "mentor-2bc9b",
    storageBucket: "mentor-2bc9b.appspot.com",
    messagingSenderId: "1033860026541",
    appId: "1:1033860026541:web:e607e94af2eab77265f624",
    measurementId: "G-6XZPJ51LW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const collection = collection(firestore, "users");
// const analytics = getAnalytics(app);