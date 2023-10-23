import { ActionType } from "../../middleware/Actions";
import { Action } from "../../middleware/Actions";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const userAuth = {
  login: () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  },

  logout: () => {
    const auth = getAuth();
    signOut(auth);
  },
/* 
  loginWithEmail(email:, password): () =>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password);
  } */
};
