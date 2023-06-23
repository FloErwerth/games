import auth, {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {doc, getDoc, getFirestore, setDoc} from "firebase/firestore";
import firebase, {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCs_JURrI_pfnXfa3UlLEbw9PRpGp4FJ3c",
    authDomain: "fuenfzig-fragen.firebaseapp.com",
    projectId: "fuenfzig-fragen",
    storageBucket: "fuenfzig-fragen.appspot.com",
    messagingSenderId: "767039832870",
    appId: "1:767039832870:web:ac9f3cb9f319ade10a77e7"
};
const firebaseApp = initializeApp(firebaseConfig);

const firebaseDB = getFirestore(firebaseApp);
export type UserData = {
    userName: string;
}
const getUsersRef = (uid: string) => doc(firebaseDB, `users/${uid}/`);
export const addFirebaseUser = async (userId: string, data: UserData) => {
    const activtiesRef = getUsersRef(userId);
    await setDoc(activtiesRef, data);
}

export const getStoredUserData = async (userId: string): Promise<UserData | undefined>  => {
    const userDoc = await getDoc(getUsersRef(userId));
    if (userDoc.exists()) {
        return userDoc.data() as UserData;
    } else return undefined
}

const Auth = getAuth(firebaseApp);

export const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(Auth, email, password);
}

export const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(Auth, email, password);
}

export const logout = () => {
    return Auth.signOut();
}

export type FirebaseError = firebase.FirebaseError;
export type UserCredential = auth.UserCredential;
