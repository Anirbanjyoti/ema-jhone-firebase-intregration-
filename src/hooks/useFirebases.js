import { useEffect, useState } from "react";
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);

const useFirebase =()=>{
    const [user, setUser] =useState({});
      // google Provider
  const GoogleProvider = new GoogleAuthProvider();

  const signInWithGoogle = (event) => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        // The email of the user's account used.
        console.error(errorMessage);
      });
    event.preventDefault();
  };
  const handleSignOut =()=>{
    const auth = getAuth();
    signOut(auth)
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
          setUser(user);
      })
  }, [])
    return {user, signInWithGoogle, handleSignOut};
}
export default useFirebase;