"use client";

import { useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, googleProvider, db } from "@/lib/firebase/client";

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null); // userData hinzufügen
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);

        const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));

        if (!userDoc.exists()) {
          const newUser = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName || "Trader",
            photoURL: firebaseUser.photoURL,
            createdAt: new Date(),
            lastLogin: new Date(),
            balance: 100000,
            portfolioValue: 0,
            totalTrades: 0,
            winningTrades: 0,
            badges: ["newbie"],
          };

          await setDoc(doc(db, "users", firebaseUser.uid), newUser);
          setUserData(newUser); // userData setzen
        } else {
          const data = userDoc.data();
          setUserData(data); // userData setzen

          await setDoc(
            doc(db, "users", firebaseUser.uid),
            {
              lastLogin: new Date(),
            },
            { merge: true }
          );
        }
      } else {
        setUser(null);
        setUserData(null); // userData zurücksetzen
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  return {
    user,
    userData, // userData zurückgeben
    loading,
    signInWithGoogle,
    signOut,
  };
}
