import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA1wTPz13DqCWZe8_UZMJsH6f8umzx86Xk",
  authDomain: "crwn-db-69c8c.firebaseapp.com",
  databaseURL: "https://crwn-db-69c8c.firebaseio.com",
  projectId: "crwn-db-69c8c",
  storageBucket: "crwn-db-69c8c.appspot.com",
  messagingSenderId: "72151480260",
  appId: "1:72151480260:web:bf32a729e55dd0902a1691",
  measurementId: "G-8TGBVEM9EQ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // If the User is not logged in the userAuth is NULL

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if(!snapshot.exists) { // If no Snapshot exists it means that the Data is not yet present for this User
    //In that case add a new Document ot the Users collection

    const { displayName, email } = userAuth; //Get the DisplayName and Email from the User Logged in
    const createdAt = new Date(); // Store the current date Time

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating the User - ', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
