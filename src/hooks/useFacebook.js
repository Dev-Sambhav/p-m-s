import { useState, useEffect } from "react";
import {
  projectAuth,
  facebookProvider,
  projectFirestore,
} from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import useShortName from "./useShortName";

export const useFacebook = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isLoadingFacebook, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const {shortTheName} = useShortName();
  const facebookSignIn = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const res = await projectAuth.signInWithPopup(facebookProvider);
      // checking user is valid or not
      if (!res) {
        throw new Error("User does not Exists");
      }


      // create a user document
      await projectFirestore.collection("users").doc(res.user.uid).set({
        online: true,
        displayName:shortTheName(res.user.displayName),
        photoURL:res.user.photoURL,
      });

      // dispatch the user data globally
      dispatch({ type: "SIGNUP", payload: res.user });

      // send welcome message
      // console.log("Email:-",res.user.email);

      // update state
      if (!isCancelled) {
        setIsLoading(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsLoading(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { error, isLoadingFacebook, facebookSignIn };
};
