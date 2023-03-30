import firebase from 'firebase/compat/app';
import 'firebase/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handleUserProfile = async (userAuth, additionData) => {
  if(!userAuth) return;

  const { uid } = userAuth;
  const userRef = firestore.doc(`users/${uid}`)
  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const { displayName, email } = userAuth;
    const timesStamp = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdDate: timesStamp,
        ...additionData
      })

    } catch(e) {
      // console.log(e);
    }
  }
  return userRef;
}
