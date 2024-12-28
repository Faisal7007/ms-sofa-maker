"use client";

import React, { useEffect, useState } from "react";
import SofaCard from "../components/sofaCard/SofaCard";
import { useFirebase } from "../context/Firebase";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(false); // Error state
  const firebase = useFirebase();

  useEffect(() => {
    setLoading(true);
    setError(false);
    firebase
      .getAllProducts()
      .then((product) => {
        const sortedBlogs = product.docs
          .map((doc) => ({ id: doc.id, ...doc.data() })) // Create an array of blog data with IDs
          .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort in descending order by date

        setTimeout(() => {
          setProducts(sortedBlogs);
          setLoading(false); // Update loading after delay
        }, 1000);
      })
      .catch(() => {
        setError(true);
        setProducts([]); // Ensure products are cleared if there's an error
      });
  }, [firebase]);

  if (loading) {
    // Show skeleton while loading
    return (
      <>
        <Navbar />
        <div
          className="bg-gray-50 mt-28 p-4 grid 
        grid-cols-1 
        sm:grid-cols-3 
        lg:grid-cols-4 
        gap-4"
        >
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <div key={index} className=" p-2 shadow">
                <Skeleton height={240}/> {/* Image Skeleton */}
                <div className="mt-6 p-4">
                  <Skeleton height={24} width="70%" /> {/* Title Skeleton */}
                  <Skeleton height={16} width="90%" className="mt-2" />
                  <Skeleton height={16} width="90%" className="mt-2" />
                  <Skeleton height={16} width="30%" className="mt-2" />

                   {/* Subtitle Skeleton */}
                  <Skeleton height={16} width="50%" className="mt-6" /> {/* Price Skeleton */}
                 
                  <Skeleton height={16} width="30%" className="mt-2 ml-52 " /> 
                

                </div>
              </div>
            ))}
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    // Show an error message if there's a network issue
    return (
      <>
        <Navbar />
        <div className="text-red-500 text-center mt-12">
          Failed to load products. Check your internet connection.
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div
        className="bg-gray-50 mt-28 media-max-450px:mt-12 p-4 grid 
      grid-cols-1 
      sm:grid-cols-3 
      lg:grid-cols-4 
      gap-4"
      >
        {products.length > 0 ? (
          products.map((sofa, id) => <SofaCard key={id} sofa={sofa} />)
        ) : (
          <div className="text-gray-600 col-span-full text-center">No products available.</div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Products;
