// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBwDbGdAwqQ0z0NBNSHNW3NlUdDjC2nfFg",
    authDomain: "happyme-e3f50.firebaseapp.com",
    projectId: "happyme-e3f50",
    storageBucket: "happyme-e3f50.appspot.com",
    messagingSenderId: "313288181905",
    appId: "1:313288181905:web:41441310bd8118f5b79730"
};

const firebaseapp=firebase.initializeApp(firebaseConfig);
const db=firebaseapp.firestore();
export default db;