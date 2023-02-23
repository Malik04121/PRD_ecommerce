// // Import the functions you need from the SDKs you need
// import * as firebase from 'firebase/app';
// // import firebase from 'firebase/app';
// import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyAjxp3PMacO94UQDiLVb14Wpg_YIRlZdUg",
//   authDomain: "techhunt-d92e4.firebaseapp.com",
//   projectId: "techhunt-d92e4",
//   storageBucket: "techhunt-d92e4.appspot.com",
//   messagingSenderId: "323845507155",
//   appId: "1:323845507155:web:39f70313073cef68f31ea6",
//   measurementId: "G-8KDX8QD9D2"
// };


// firebase.initializeApp(firebaseConfig);

// export default firebase;



























import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getAuth} from "firebase/auth"
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjxp3PMacO94UQDiLVb14Wpg_YIRlZdUg",
  authDomain: "techhunt-d92e4.firebaseapp.com",
  projectId: "techhunt-d92e4",
  storageBucket: "techhunt-d92e4.appspot.com",
  messagingSenderId: "323845507155",
  appId: "1:323845507155:web:39f70313073cef68f31ea6",
  measurementId: "G-8KDX8QD9D2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}
  const logout = () => {
    signOut(auth);
  };

  export {
    auth,
    signInWithGoogle,
    logout,
  };
export default app