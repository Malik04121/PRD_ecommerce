

import React, { useState } from "react";

import {
 
  onAuthStateChanged,
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

      const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
        // if(currentUser){
        //   console.log("currentuserr is present")
        //   userLogin(localStorage.getItem("token"))
        //   setUser(currentUser)
        // }
        // else{
        //   console.log("nsjfukufbe")
          setUser(currentUser)
        // }
        // setUser(currentUser);
         
      });
  
      return () => {
        unsubscribe();
      //   userLogin(localStorage.getItem("token"))
      //   // setUserName(localStorage.getItem("userName"))

      };
    }, []);
  
    // console.log("user",user)
  
  
    return (
      <AuthContext.Provider
        value={{ user, googleSignIn}}
      >
        {children}
      </AuthContext.Provider>
    );
  }