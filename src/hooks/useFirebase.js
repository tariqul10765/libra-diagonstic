import { useEffect, useState } from "react"
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
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
    const emailPasswordSignUp = (name, email, password) => {
        setIsLoadding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailPasswordSignIn = (email, password) => {
        setIsLoadding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userProfileUpdate = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            setUser(user);
            console.log('profile updated!', user);
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
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
        console.log('user change hoise!!', user);
    }, [user])
    useEffect(() => {
        // Get the currently signed-in user
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log('onstatus change!');
            } else {
            }
            setIsLoadding(false);
        });
    }, [auth]);

    return {
        user,
        error,
        setError,
        isLoadding,
        googleSignIn,
        emailPasswordSignUp,
        emailPasswordSignIn,
        userProfileUpdate,
        userSignOut,
    }
}

export default useFirebase;