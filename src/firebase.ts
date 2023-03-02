import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const addUserFirestore = async (email: string, uid: string) => {
    await setDoc(doc(db, "users", email), {
        email, uid
    });
};

export const createUser = async (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const { uid } = user;

            addUserFirestore(email, uid);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(`Error: ${errorMessage}, code: ${errorCode}`);
        });
};

export const signIn = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(`Error: ${errorMessage}, code: ${errorCode}`);
        });
};

export const getCurrentAuthUser = () => {
    if (auth.currentUser) {
        const { email, uid } = auth.currentUser;
        return { email, uid };
    } else {
        return null;
    }
};


