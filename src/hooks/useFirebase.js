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
    const [isLoadding, setIsLoadding] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setIsLoadding(true);
        return signInWithPopup(auth, googleProvider)

    }
    const emailPasswordSignUp = (email, password) => {
        setIsLoadding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode);
            })
            .finally(() => setIsLoadding(false));
    }

    const emailPasswordSignIn = (email, password) => {
        setIsLoadding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode)
            })
            .finally(() => setIsLoadding(false));
    }

    const userSignOut = () => {
        setIsLoadding(true);
        signOut(auth)
            .then(() => {
                console.log('Sign-out successful.');
                setUser({});
            }).catch((error) => {
                setError(error);
            })
            .finally(() => setIsLoadding(false));
    }

    useEffect(() => {
        // Get the currently signed-in user
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
            }
            setIsLoadding(false);
        });
    }, [auth]);

    return {
        user,
        error,
        isLoadding,
        googleSignIn,
        emailPasswordSignUp,
        emailPasswordSignIn,
        userSignOut
    }
}

export default useFirebase;