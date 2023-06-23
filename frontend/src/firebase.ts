import {initializeApp} from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyCs_JURrI_pfnXfa3UlLEbw9PRpGp4FJ3c",
    authDomain: "fuenfzig-fragen.firebaseapp.com",
    projectId: "fuenfzig-fragen",
    storageBucket: "fuenfzig-fragen.appspot.com",
    messagingSenderId: "767039832870",
    appId: "1:767039832870:web:ac9f3cb9f319ade10a77e7"
};
export const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const logout = () => {
    return auth.signOut();
}

export type FirebaseError = firebase.FirebaseError;
export type UserCredential = firebase.auth.UserCredential;