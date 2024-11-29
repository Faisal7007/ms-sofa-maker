"use client";

import React, { useEffect, useState } from "react";
import SofaCard from "../components/sofaCard/SofaCard";
import { useFirebase } from "../context/Firebase";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardSkeleton from "../components/card-skeleton/CardSkeleton";
import Spinner from "../components/spinner/Spinner";

// const CardSkeleton = () => (
//   <div className="rounded overflow-hidden shadow-lg bg-gray-200 py-4 animate-pulse">
//     <div className="flex justify-center items-center">
//       <div className="w-96 h-64 bg-gray-300"></div>
//     </div>
//     <div className="p-4">
//       <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
//       <div className="h-4 bg-gray-300 rounded mb-4 w-5/6"></div>
//       <div className="space-y-2">
//         <div className="h-4 bg-gray-300 rounded w-1/4"></div>
//         <div className="h-4 bg-gray-300 rounded w-1/3"></div>
//         <div className="h-4 bg-gray-300 rounded w-1/5"></div>
//       </div>
//       <div className="flex space-x-2 mt-4">
//         <div className="h-4 bg-gray-300 rounded w-12"></div>
//         <div className="h-4 bg-gray-300 rounded w-12"></div>
//       </div>
//     </div>
//   </div>
// );

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
      })
      .finally(() => {
        setLoading(false);
      });
  }, [firebase]);

  if (loading) {
    // Show skeleton while loading
    return (
      <>
        <Navbar />
        <div className="bg-gray-50 mt-28 p-4 grid 
        grid-cols-1 
        sm:grid-cols-3 
        lg:grid-cols-4 
        gap-4">
          {Array(16)
            .fill(null)
            .map((_, index) => (
              <CardSkeleton key={index} />
            ))}
        </div>
        <Footer />
      </>
    );
  }

  // if (error) {
  //   // Show an error message if there's a network issue
  //   return (
  //     <>
  //       <Navbar />
  //       <div className="text-red-500 text-center mt-12">
  //         Failed to load products. Check your internet connection.
  //       </div>
  //       <Footer />
  //     </>
  //   );
  // }

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
          <div className="text-gray-600 col-span-full text-center">
           <Spinner/>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Products;
