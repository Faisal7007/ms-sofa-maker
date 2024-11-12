"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from 'firebase/firestore';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

// const firebaseConfig = {
//   apiKey: "AIzaSyCmOYgPUFwQi-wY4IGHd9FDrzZYyqPIIj8",
//   authDomain: "ms-sofa-maker-2a5e7.firebaseapp.com",
//   projectId: "ms-sofa-maker-2a5e7",
//   storageBucket: "ms-sofa-maker-2a5e7.firebasestorage.app",
//   messagingSenderId: "858119965466",
//   appId: "1:858119965466:web:64b90534bb610a197cfaa3",
//   measurementId: "G-F28PWVT3Z2",
//   databaseURL: "https://ms-sofa-maker-2a5e7-default-rtdb.firebaseio.com"
// };
 
const firebaseConfig = {
  apiKey: "AIzaSyCPW8tCixXYgBKJjj9BQdXlEKvOW_vunF0",
  authDomain: "red-parts-2001.firebaseapp.com",
  projectId: "red-parts-2001",
  storageBucket: "red-parts-2001.appspot.com",
  messagingSenderId: "620291116962",
  appId: "1:620291116962:web:01a31c6dfdb114b10f6cfb",
  databaseURL:"https://red-parts-2001-default-rtdb.firebaseio.com"
};





let firebaseApp, auth, firestore, database, storage;

// Initialize Firebase only once
if (typeof window !== "undefined" && !firebaseApp) {
  firebaseApp = initializeApp(firebaseConfig);
  auth = getAuth(firebaseApp);
  firestore = getFirestore(firebaseApp);
  database = getDatabase(firebaseApp);
  storage = getStorage(firebaseApp);
}

export const FirebaseProvider = ({ children }) => {
  const putData = (key, data) => set(ref(database, key), data);

  const handleAddNewBlog = async (title, description, image) => {
    const imageRef = storageRef(storage, `uploads/images/${Date.now()}-${image.name}`);
    const uploadResults = await uploadBytes(imageRef, image);
    await addDoc(collection(firestore, 'blogs'), {
      title,
      description,
      imageUrl: uploadResults.ref.fullPath,
    });
  };

  const getAllBlogs = () => getDocs(collection(firestore, 'blogs'));

  const getImageURL = async (path) => {
    const imageRef = storageRef(storage, path);
    return getDownloadURL(imageRef);
  };

  const getBlogById = async (id) => {
    const docRef = doc(firestore, 'blogs', id);
    return await getDoc(docRef);
  };

  const createUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account Created Successfully");
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  const LoginUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successful");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{ putData, handleAddNewBlog, getAllBlogs, getImageURL, createUser, LoginUser, getBlogById }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
