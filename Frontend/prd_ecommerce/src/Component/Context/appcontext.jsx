// import React, { createContext, useContext, useState, useEffect } from 'react';
// import firebase from "../Firebase_config"

// // Create a new AuthContext
// export const AuthContext = createContext();

// // Create a provider for the AuthContext
// const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     // Set up an observer to listen for authentication state changes
//     const unsubscribe = firebase.auth().onAuthStateChanged(user => {
//       setCurrentUser(user);
//     });

//     // Unsubscribe from the observer when the component unmounts
//     return unsubscribe;
//   }, []);

//   const signInWithGoogle = async () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     await firebase.auth().signInWithPopup(provider);
//   };

  
//     const signOut = async () => {
//       try {
//         await firebase.auth().signOut();
//         setCurrentUser(null);
//       } catch (error) {
//         console.log(error);
//       }
//     };
  

//   return (
//     <AuthContext.Provider value={{ currentUser, signInWithGoogle, signOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Export a custom hook to use the AuthContext
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export default AuthProvider
























import React, { useState } from "react";
import firebase from 'firebase/app';

import {
 
  onAuthStateChanged,
  logout,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
//   FacebookAuthProvider,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
} from "firebase/auth";

import { auth } from "../Firebase_config";
import { useEffect } from "react";
// import axios from "axios";


export const AuthContext = React.createContext();
export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});
    // const [userName,setUserName] = useState("")
    // const [Id,setId]=useState("")
    // const [user_Auth,set_Auth]=useState({
    //   user_Auth:false,
    //   token:null
    // });
    // const userLogin=(token)=>{
    //   set_Auth({user_Auth:true,token:token});
    //   setUserName(localStorage.getItem("userName"))
  
    // }
    // console.log(localStorage.getItem("userName"),"userName is thhis")

    // function logOut() {
    //   setUserName('')
    //   setId("")
    //   localStorage.removeItem("token")
    //   localStorage.removeItem("userName")
    //   localStorage.removeItem("id")
    //   set_Auth({user_Auth:false,
    //     token:null})
    //   return signOut(auth);
    // }
   
    
  
    function googleSignIn() {
      const googleAuthProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleAuthProvider);
    }
  
    // function facebookSignIn() {
    //   const provider = new FacebookAuthProvider();
    //   return signInWithPopup(auth, provider);
    // }
    
  
  
  //  console.log("user_Auth",user_Auth)
  
    useEffect(() => {

      const unsubscribe = onAuthStateChanged(auth,(user) => {
        setUser(user);
      });

      // const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
        // if(currentUser){
        //   console.log("currentuserr is present")
        //   userLogin(localStorage.getItem("token"))
        //   setUser(currentUser)
        // }
        // else{
        //   console.log("nsjfukufbe")
          // setUser(currentUser)
        // }
        // setUser(currentUser);
         
      // });
  
      return () => {
        unsubscribe();
      //   userLogin(localStorage.getItem("token"))
      //   // setUserName(localStorage.getItem("userName"))

      };
    }, []);
  
    // console.log("user",user)
    const signOut = async () => {
            try {
              await signOut(auth);
              setUser(null);
              
            } catch (error) {
              console.log(error);
            }
          };


    // const signOut = () => {
    //   return firebase.auth().signOut();
    // };
  
    return (
      <AuthContext.Provider
        value={{ user, googleSignIn,signOut}}
      >
        {children}
      </AuthContext.Provider>
    );
  }