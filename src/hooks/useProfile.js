import {
  projectAuth,
  projectFirestore,
} from "../firebase/config";
import { useState, useEffect } from "react";
import { UPDATE_PROFILE } from "../context/action";
import { useAuthContext } from "./useAuthContext";

export const useProfile = (collectionName) => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {dispatch} = useAuthContext();

  // collection ref
  const ref = projectFirestore.collection(collectionName);

  // update a document
  const updateProfile = async (id, updates)=>{
    setError(null);
    setIsLoading(true);
    try{
      await projectAuth.currentUser.updateProfile(updates);
      await ref.doc(id).update(updates);
      dispatch({type:UPDATE_PROFILE,payload:projectAuth.currentUser});
      // update state
      if (!isCancelled) {
        setIsLoading(false);
        setError(null);
      }
    }catch(err){
        if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isLoading, updateProfile };
};
