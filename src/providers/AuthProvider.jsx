// import React from 'react';
import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';

import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loadingState, setLoadingState] = useState(true);
    // create user
    const createUser = (email, password) => {
        setLoadingState(true);
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
        setLoadingState(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // login with google
    const loginWithGoogle = () => {
        setLoadingState(true);
        return signInWithPopup(auth, googleProvider)
    }
    // login with facebook
    const loginWithFacebook = () => {
        setLoadingState(true);
        return signInWithPopup(auth, facebookProvider);
    }
    // login with github
    const loginWithGithub = () => {
        setLoadingState(true);
        return signInWithPopup(auth, githubProvider);
    }
    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoadingState(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])
    // logout
    const logOut = () => {
        setLoadingState(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        loadingState,
        createUser,
        loginUser,
        loginWithGoogle,
        loginWithFacebook,
        loginWithGithub,
        logOut,
        updateUser
    };
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