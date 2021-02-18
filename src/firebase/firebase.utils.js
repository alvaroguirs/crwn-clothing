import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBTIQpz5J8QXq1RQk84LU-BnYREgKQ83Ok",
    authDomain: "crwn-db-17926.firebaseapp.com",
    projectId: "crwn-db-17926",
    storageBucket: "crwn-db-17926.appspot.com",
    messagingSenderId: "292931993815",
    appId: "1:292931993815:web:a65019d0166f77dfda3092",
    measurementId: "G-N39BT34FB6"
  }


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;      
        
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot =  await userRef.get();
    if (!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });

      } catch(error){
        console.log('error creating user', error.message);
      }
      
    }
    return userRef;
    console.log(snapShot);
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
