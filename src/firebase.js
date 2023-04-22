// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC1BYsAbdJ1Tb0rkZ49-Df0d1582YCWkjI",
    authDomain: "reels-1605e.firebaseapp.com",
    projectId: "reels-1605e",
    storageBucket: "reels-1605e.appspot.com",
    messagingSenderId: "557581994160",
    appId: "1:557581994160:web:63b6b52789c06a186d1375",
    measurementId: "G-1QZ1WDLVBM"
};

const firebaseapp=firebase.initializeApp(firebaseConfig);
const db=firebaseapp.firestore();
export default db;