import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { FaTumblrSquare } from 'react-icons/fa';

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loader,setLoader] = useState(true)

    const creatUser = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = ()=>{
        setLoader(FaTumblrSquare)
        signOut(auth)
    }

    useEffect(()=>{
      const unsubcribe =  onAuthStateChanged(auth,loggedInUser =>{
            console.log('loggged user',loggedInUser)
            setUser(loggedInUser)
            setLoader(false)
        })
        return ()=>{
            unsubcribe();
        }
    },[])


    const AuthInfo ={
        creatUser,
        loader,
        login,
        logout,
        user
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;