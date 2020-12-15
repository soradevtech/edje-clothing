import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCnn7YHmcgoFUrIn-uNl8ZZvJQ-NImtLog",
    authDomain: "dg3-db.firebaseapp.com",
    databaseURL: "https://dg3-db.firebaseio.com",
    projectId: "dg3-db",
    storageBucket: "dg3-db.appspot.com",
    messagingSenderId: "414214371477",
    appId: "1:414214371477:web:2fd54e9f1dcc5dbb4f039c",
    measurementId: "G-N563L7S1NR",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

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
            console.log("error creating user", error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider); // come back and check on this

export default firebase;
