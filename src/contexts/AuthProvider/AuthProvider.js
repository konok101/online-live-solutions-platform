import React, { createContext, useEffect, useState } from 'react'
import auth from '../../Pages/Login/Firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const createUser = (email, Password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, Password);
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log("Email verification sent");
            });
    }

    // const resetPassword = (email) => {
    //     sendPasswordResetEmail(auth, email)
    //     .then (() => { 
    //         console.log('email sent');
    //     })
    // }

    const signIn = (email, Password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, Password);
    }


    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('email sent');
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ..
            });
    }


    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
            })
            .catch((error) => {
                // setAuthError(error.message);
            })
        // .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])


    const authInfo = {
        createUser,
        verifyEmail,
        signIn,
        resetPassword,
        loading,
        signInWithGoogle,
        logOut,
        user

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider