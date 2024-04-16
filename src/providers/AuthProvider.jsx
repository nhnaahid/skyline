// import React from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';

import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update user
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // login with google
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // login with facebook
    const loginWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    }
    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])
    // logout
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = { user, createUser, loginUser, loginWithGoogle, loginWithFacebook, logOut, updateUser };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;