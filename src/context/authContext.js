import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no authentication provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unSubscribe();
  }, []);

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookProvider);
  };

  const updateUser = async (user) => {
    await updateProfile(auth, user, {
      displayName: "test",
    });
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loginWithGoogle,
        resetPassword,
        loginWithFacebook,
        updateUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
