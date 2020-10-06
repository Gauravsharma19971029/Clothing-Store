import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAMSwIiB3V00l-HUef8enSdLlX86WVbakk",
  authDomain: "clothingstoredb-754e9.firebaseapp.com",
  databaseURL: "https://clothingstoredb-754e9.firebaseio.com",
  projectId: "clothingstoredb-754e9",
  storageBucket: "clothingstoredb-754e9.appspot.com",
  messagingSenderId: "416033280777",
  appId: "1:416033280777:web:457092127711fe40b839d8",
  measurementId: "G-QEKSYBBHND",
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  alert("add Collection and Documents called");

  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
  console.log(collections.docs);
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{});

 
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user " + error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
