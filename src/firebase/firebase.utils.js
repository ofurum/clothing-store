import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDwD0eeriNPivrDbKfQKW7iH_iE22rskok",
  authDomain: "clothing-store-db-eab8e.firebaseapp.com",
  projectId: "clothing-store-db-eab8e",
  storageBucket: "clothing-store-db-eab8e.appspot.com",
  messagingSenderId: "812343355789",
  appId: "1:812343355789:web:f467f8953e19729277f5c4",
  measurementId: "G-LNM33ELEL9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;