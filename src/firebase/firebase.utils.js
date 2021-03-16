import firebase from 'firebase';
import 'firebase/auth';
import "firebase/firestore";


const config = { 
    apiKey: "AIzaSyDpQTImFJs8v9gdYuwsB5nxwM5lbu7IWG8",
    authDomain: "crwn-db-50653.firebaseapp.com",
    projectId: "crwn-db-50653",
    storageBucket: "crwn-db-50653.appspot.com",
    messagingSenderId: "73592696113",
    appId: "1:73592696113:web:7e8e9d05725e53f012d410",
    measurementId: "G-177QX5HJXK"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt': 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase