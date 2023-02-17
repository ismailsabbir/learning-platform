import React, { createContext } from 'react';
import { GithubAuthProvider, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './../firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';
export const Authcontext=createContext();
const auth=getAuth(app);
// const user = auth.currentUser;
const provider=new GoogleAuthProvider();
const provider1 = new GithubAuthProvider();
const UserContext = ({children}) => {
    const[user,setuser]=useState({});
    const [loading,setloading]=useState(true)
    const createuser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const githubacount=()=>{
        return signInWithPopup(auth,provider1);
    }
    const userlogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        return signOut(auth)
    }
    const signupwithgoogle=()=>{
        return signInWithPopup(auth,provider)
    }
    const resetpassword=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    const updatename=(name)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
        })
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setuser(currentUser);
            setloading(false)
        })
        return()=>{
            unsubscribe();
        }
    },[])
    const authinfo={updatename,resetpassword,user,createuser,userlogin,logout,signupwithgoogle,loading,githubacount}
    return (
<Authcontext.Provider value={authinfo}>
    {children}
</Authcontext.Provider>
    );
};

export default UserContext;