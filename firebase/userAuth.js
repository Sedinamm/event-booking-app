import React from "react";
import { auth, fireDB } from "./config.js";
import firebase from "firebase";
import { Alert } from "react-native";

const userAuth = () => {
  async function signUp(email, password) {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      const userId = auth.currentUser.uid;
      if (auth.currentUser != null) {
        fireDB
          .collection("users")
          .doc(userId)
          .set({
            email: email,
            id: `user-${userId}`,
            tickets: [],
          });
      }
    } catch (error) {
      Alert.alert("there is something wrong!!", error.message);
    }
  }
  async function signIn(email, password) {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert("there is something wrong!!", error.message);
    }
  }

  async function signOut() {
    try {
      await auth.signOut();
    } catch (error) {
      Alert.alert("there is something wrong!!", error.message);
    }
  }
  return { signUp, signIn, signOut };
};
export default userAuth;
