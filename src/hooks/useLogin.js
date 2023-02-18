import { useState, useEffect } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch, handleShowAlert } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsLoading(true);
    try {
      // checking all field empty or not
      if (email === "" || password === "") {
        throw new Error("Required");
      }
      // login the user
      const res = await projectAuth.signInWithEmailAndPassword(email, password);
      // checking user is valid or not
      if (!res) {
        throw new Error("User does not Exists");
      }
      // console.log(res);
      // update the user online status
      await projectFirestore.collection("users").doc(res.user.uid).update({
        online: true,
      });

      dispatch({ type: "LOGIN", payload: res.user });
      // update state
      if (!isCancelled) {
        setError(null);
        setIsLoading(false);
      }
    } catch (err) {
      if (!isCancelled) {
        setIsLoading(false);
        console.log(err);
        if (err === "Required") setError("Please fill all the fields");
        else if (err.code === "auth/user-not-found")
          setError("User doesn't exists");
        else if (err.code === "auth/wrong-password")
          setError("Password is Invalid");
        else setError("Too many wrong attempts. Please try again later!!!");
        handleShowAlert();
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isLoading, login };
};
