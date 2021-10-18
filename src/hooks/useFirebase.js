import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

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
        userSignOut
    }
}

export default useFirebase;