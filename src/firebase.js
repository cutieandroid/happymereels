// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
   //add your firebase config here 
};

const firebaseapp=firebase.initializeApp(firebaseConfig);
const db=firebaseapp.firestore();
export default db;
