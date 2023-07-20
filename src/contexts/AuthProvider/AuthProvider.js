import React, { createContext, useEffect, useState } from 'react'
import auth from '../../Pages/Login/Firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, sendEmailVerification, sendPasswordResetEmail, updateProfile, getIdToken } from 'firebase/auth';
// import { useNavigate,  useLocation } from 'react-router';
import { useLocation, useNavigate } from "react-router";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [authError, setAuthError] = useState('');
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [teacher, setTeacher] = useState(false);
    const provider = new GoogleAuthProvider();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const registerUser = (email, Password, name) => {
        setLoading(true);
         return createUserWithEmailAndPassword(auth, email, Password)
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
                // history.replace('/');
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



const signIn = (email, Password,navigate) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, Password)
    .then((userCredential) => {
        setAuthError('');
        navigate(from, { replace: true })
    })
    .catch((error) => {
        setAuthError(error.message);
    })
    .finally(() => setLoading(false)); 
}

const signInWithGoogle = (location, navigate) => {
    setLoading(true);
    return signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            //save user to the database
            saveUser(user.email, user.displayName, 'PUT');
            setAuthError('');
        }).catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setLoading(false));
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










console.log('user 111', user);







/*  useEffect(() => {
const adminn = (email) => {
    const user = { email };
    fetch(`https://educational-live-solutions-sever.vercel.apphttps://educational-live-solutions-sever.vercel.app/users/${user?.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
}
 }, [user?.email])

 */

 useEffect(() => {

    fetch(`http://localhost:5000/users/${user?.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
}, [user?.email])



useEffect(() => {
    fetch(`http://localhost:5000/users/teacher/${user?.email}`)
        .then(res => res.json())
        .then(data => setTeacher(data.teacher))
}, [user?.email])

 console.log('admin auth', admin);
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
    admin,
    teacher,
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