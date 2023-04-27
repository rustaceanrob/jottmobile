import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../config/firebase'
import { signOut, 
    signInWithEmailAndPassword, createUserWithEmailAndPassword , sendEmailVerification,
    onAuthStateChanged, setPersistence, browserSessionPersistence, sendPasswordResetEmail, 
    browserLocalPersistence } from 'firebase/auth'

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const signInEmail = (email, pw) => {
        return signInWithEmailAndPassword(auth, email, pw)
    }

    const createEmail = (email, pw, setError, setLoading, setEmailSent) => {
        createUserWithEmailAndPassword(auth, email, pw).then((userCredential) => {
            sendEmailVerification(userCredential.user).then(()=> {
                setError(false)
                setEmailSent(true)
            }).catch(() => {
                setError(true)
            })
        }).catch(() => {
            setError(true)
            setLoading(false)
        })
    }
    
    const reverify = (email, pw, setError, setLoading, setEmailSent) => {
        signInWithEmailAndPassword(auth, email, pw).then((userCredential) => {
            sendEmailVerification(userCredential.user).then(()=> {
                setError(false)
                setEmailSent(true)
            }).catch(() => {
                setError(true)
            })
        }).catch(() => {
            setError(true)
            setLoading(false)
        })

    }

    const resetPassword = (email, setEmailSent, setError) => {
        sendPasswordResetEmail(auth, email).then(() => {
            setEmailSent(true)
        }).catch(() => {
            setError(true)
        })
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
      }, [user])

    return (
        <UserContext.Provider value={{user, signInEmail, resetPassword, createEmail, reverify, logOut}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}