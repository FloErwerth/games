import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCs_JURrI_pfnXfa3UlLEbw9PRpGp4FJ3c",
    authDomain: "fuenfzig-fragen.firebaseapp.com",
    projectId: "fuenfzig-fragen",
    storageBucket: "fuenfzig-fragen.appspot.com",
    messagingSenderId: "767039832870",
    appId: "1:767039832870:web:ac9f3cb9f319ade10a77e7"
};
export const firebaseApp = initializeApp(firebaseConfig)