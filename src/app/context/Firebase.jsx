"use client";

import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const firebaseConfig = {
  apiKey: "AIzaSyCPW8tCixXYgBKJjj9BQdXlEKvOW_vunF0",
  authDomain: "red-parts-2001.firebaseapp.com",
  projectId: "red-parts-2001",
  storageBucket: "red-parts-2001.appspot.com",
  messagingSenderId: "620291116962",
  appId: "1:620291116962:web:01a31c6dfdb114b10f6cfb",
  databaseURL: "https://red-parts-2001-default-rtdb.firebaseio.com",
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

const successLogin = () => toast("Login Successfully");
const loginFail = () => toast("Invalid email or password");
const addToast=()=>toast("Added Successfully")
const deleteToast=()=>toast("Deleted Successfully")
const updateToast=()=>toast("Updated Successfully")

export const FirebaseProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const putData = (key, data) => set(ref(database, key), data);

  const handleNewProduct = async (
    productName,
    color,
    description,
    material,
    seatingCapacity,
    width,
    depth,
    height,
    features,
    imageOne,
    imageTwo,
    imageThree
  ) => {
    try {
      const imageRefs = [
        storageRef(storage, `uploads/images/${Date.now()}-${imageOne.name}`),
        storageRef(storage, `uploads/images/${Date.now()}-${imageTwo.name}`),
        storageRef(storage, `uploads/images/${Date.now()}-${imageThree.name}`),
      ];

      const imageFiles = [imageOne, imageTwo, imageThree];

      const uploadPromises = imageFiles.map((file, index) =>
        uploadBytes(imageRefs[index], file).then(() =>
          getDownloadURL(imageRefs[index])
        )
      );
      const imageUrls = await Promise.all(uploadPromises);

      await addDoc(collection(firestore, "products"), {
        proName: productName,
        details: {
          description,
          color,
          material,
          dimensions: { width, depth, height },
          seatingCapacity,
          features,
        },
        imageUrls,
      });
      addToast()
    } 
    
    catch (error) {
      // console.error("Error adding product:", error);
    }
  };



   const addTestimonial = async (name, review, image, rating) => {
    try {
      let imageUrl = null;
  
      // Upload image to Firebase Storage if provided
      if (image) {
        const storageReference = storageRef(storage, `testimonials/${Date.now()}-${image.name}`);
        await uploadBytes(storageReference, image);
        imageUrl = await getDownloadURL(storageReference);
      }
  
      // Add testimonial data to Firestore
      const testimonialData = {
        name,
        review,
        rating,
        imageUrl, // Use the uploaded image URL
        createdAt: new Date().toISOString(), // Add timestamp
      };
  
      await addDoc(collection(firestore, "testimonials"), testimonialData);
  
      return { success: true, message: "Testimonial added successfully." };
    } catch (error) {
      // console.error("Error adding testimonial:", error);
      return { success: false, message: "Failed to add testimonial." };
    }
  };



  const getAllTestimonials = () => getDocs(collection(firestore, "testimonials"));


  const getAllProducts = () => getDocs(collection(firestore, "products"));

  const getImageURL = async (path) => {
    const imageRef = storageRef(storage, path);
    return getDownloadURL(imageRef);
  };

  const getProductById = async (id) => {
    const docRef = doc(firestore, "products", id);
    return await getDoc(docRef);
  };

  const deleteProductById = async (id) => {
    try {
      const docRef = doc(firestore, "products", id); // Corrected firestore reference
      await deleteDoc(docRef);
      // console.log("Document successfully deleted!");
      deleteToast()
    } catch (error) {
      // console.error("Error deleting document: ", error);
    }
  };
  
  const updateProductById = async (
    id,
    productName,
    color,
    description,
    material,
    seatingCapacity,
    width,
    depth,
    height,
    features,
    imageOne,
    imageTwo,
    imageThree,
    existingImageUrls // Pass existing URLs as an array
  ) => {
    try {
      const newImages = [imageOne, imageTwo, imageThree];
  
      // Update logic: use new image URLs or retain existing ones
      const updatedImageUrls = await Promise.all(
        newImages.map(async (file, index) => {
          if (file && file.name) {
            // Upload new image and get URL
            const imageRef = storageRef(storage, `uploads/images/${Date.now()}-${file.name}`);
            await uploadBytes(imageRef, file);
            return await getDownloadURL(imageRef);
          } else {
            // Use existing image URL
            // console.log(existingImageUrls, "existingImageUrls in Firestore");
            return existingImageUrls[index] || null; // Ensure fallback
          }
        })
      );
  
      // Filter out any invalid or null values
      const validImageUrls = updatedImageUrls.filter(Boolean);
  
      // Firestore reference
      const docRef = doc(firestore, "products", id);
  
      // Update Firestore document
      await updateDoc(docRef, {
        proName: productName,
        details: {
          description,
          color,
          material,
          dimensions: { width, depth, height },
          seatingCapacity,
          features,
        },
        imageUrls: validImageUrls, // Updated image URLs
      });
      // console.log("Document successfully updated!");
      updateToast()
    } catch (error) {
      console.error("Error updating document: ", error)
      throw error; // Ensure error propagation
    }
  };
  


  const LoginUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      successLogin();
    } catch (error) {
      // loginFail();
    }
  };

  const checkSession = async () => {
    await setPersistence(auth, browserSessionPersistence);
  };

  const onAuthChange = (user2, setUser2) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser2(user);
        setUserData(user);
        // console.log("Welcome! You are logged in", user2);
      } else {
        // console.log("Not logged in");
        setUser2(null);
      }
    });
  };

  const logOut = () => {
    signOut(auth);
  };

 
  const isLoggedIn = !userData;

  return (
    <FirebaseContext.Provider
      value={{
        onAuthChange,
        logOut,
        checkSession,
        putData,
        handleNewProduct,
        getAllProducts,
        getImageURL,
        LoginUser,
        getProductById,
        deleteProductById,
        updateProductById,
        addTestimonial,
        getAllTestimonials,
        isLoggedIn,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
