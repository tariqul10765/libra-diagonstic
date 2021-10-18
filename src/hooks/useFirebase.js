import { useEffect, useState } from "react"
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import initializeFirebaseApp from "../firebase/firebase.init";

initializeFirebaseApp();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {

            })
            .catch(error => {
                setError(error.message);
            })
    }
    const emailPasswordSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user);
                console.log(result);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                console.log(errorMessage);
            });
    }

    const emailPasswordSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                setError(error);
            });
    }

    useEffect(() => {
        // Get the currently signed-in user
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setError('User is signed out');
            }
        });
    }, [auth]);

    return {
        user,
        error,
        googleSignIn,
        emailPasswordSignUp,
        emailPasswordSignIn,
        userSignOut
    }
}

export default useFirebase;