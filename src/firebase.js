// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDFT-XKGgu22EoRC9NUJ-1AMOtsO6Op_v8",
    authDomain: "e-challange-13757.firebaseapp.com",
    projectId: "e-challange-13757",
    storageBucket: "e-challange-13757.appspot.com",
    messagingSenderId: "120775943358",
    appId: "1:120775943358:web:d66e2b2f741ea431aeaaef",
    measurementId: "G-2HELLP83C0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };