import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBxlNmn1Ox_00dve4LrDiPsNPn33oR6Myk",
    authDomain: "clone-9c748.firebaseapp.com",
    projectId: "clone-9c748",
    storageBucket: "clone-9c748.appspot.com",
    messagingSenderId: "199542183570",
    appId: "1:199542183570:web:386e3aeaffaa3fe3a2f84b",
    measurementId: "G-MHPEJRQDDF"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };