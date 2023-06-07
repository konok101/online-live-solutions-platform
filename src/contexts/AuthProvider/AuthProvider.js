import React, { createContext, useEffect, useState } from 'react'
import auth from '../../Pages/Login/Firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, sendEmailVerification, sendPasswordResetEmail, updateProfile, getIdToken } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [authError, setAuthError] = useState('');
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const provider = new GoogleAuthProvider();

    const registerUser = (email, Password, name, history) => {
        setLoading(true);
         createUserWithEmailAndPassword(auth, email, Password)
            .then(() => {
                 // const user = userCredential.user;
                setAuthError('');
                verifyEmail();
                const newUser = { email, displayName: name };
                setUser(newUser);
                //save user to the database
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }




const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
        .then(() => {
            console.log("Email verification sent");
        });
}



const signIn = (email, Password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, Password);
}

const updateUser = (userInfo) => {
    return updateProfile(user, userInfo);
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
// const signInWithGoogle = () => {
//     return signInWithPopup(auth, provider)
//         .then((result) => {
//             // This gives you a Google Access Token. You can use it to access the Google API.
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//             const user = result.user;
//             saveUser(user.email,  user.displayName,'PUT');
//             // const destination = location?.state?.from || '/';
//         })
//         .catch((error) => {
//             // setAuthError(error.message);
//         })
//     // .finally(() => setIsLoading(false));
// }




const signInWithGoogle = (location, navigate) => {
    setLoading(true);
    return signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            //save user to the database
            saveUser(user.email, user.displayName, 'PUT');
            setAuthError('');
            const destination = location?.state?.from || '/';
            navigate.replace(destination);
        }).catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setLoading(false));
}



//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//             // const destination = location?.state?.from || '/';
//         })
//         .catch((error) => {
//             // setAuthError(error.message);
//         })
//     // .finally(() => setIsLoading(false));
// }

// const signInWithGoogle = (location, history) => {
//     setIsLoading(true);
//     signInWithPopup(auth, googleProvider)
//         .then((result) => {
//             const user = result.user;

//              //save user to the database
//              saveUser(user.email, user.displayName, 'PUT');

//             setAuthError('');
//             const destination = location?.state?.from || '/';
//             history.replace(destination);
//         }).catch((error) => {
//             setAuthError(error.message);
//         })
//         .finally(() => setIsLoading(false));
// }



















const saveUser = (email, displayName, method) => {
    const user = { email ,displayName};
    fetch('http://localhost:5000/users', {
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then()
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
    const unsubscribe = onAuthStateChanged(auth, user => {
        // console.log('user observing');
        if (user) {
            setUser(user);
            getIdToken(user)
                .then(idToken => {
                    setToken(idToken);
                })
        } else {
            setUser({});
        }
        setLoading(false);
    });
    return () => unsubscribe();
}, [])


















// useEffect(() => {
const adminn = (email) => {
    const user = { email };
    fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
}
// // }, [user.email])

// useEffect(() => {

//     fetch(`http://localhost:5000/users/${user.email}`)
//         .then(res => res.json())
//         .then(data => setAdmin(data.admin))
// }, [user.email])


const authInfo = {
    registerUser,
    verifyEmail,
    signIn,
    updateUser,
    adminn,
    resetPassword,
    loading,
    signInWithGoogle,
    logOut,
    user,
    token,
    authError

}

return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
)
    
}
export default AuthProvider