"use client"

import React, { useEffect, useState } from "react";
import SofaCard from "../../components/sofaCard/SofaCard";
import { useFirebase } from "../../context/Firebase";
import Navbar from "../../components/navbar/index";

function HomeProducts() {
  const [products, setProducts] = useState('')
    
  const firebase = useFirebase();
  // console.log(firebase,'ki')

  useEffect(() => {
    firebase.getAllProducts().then((product) => {
      
      const sortedBlogs = product.docs
        .map((doc) => ({ id: doc.id, ...doc.data() })) // Create an array of blog data with IDs
        .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort in descending order by date

        // setProducts(sortedBlogs);
        const shuffled = sortedBlogs.sort(() => 0.5 - Math.random());
        const randomSix = shuffled.slice(0, 8);
  
        setProducts(randomSix);
    });
  }, [firebase]);
  // console.log(products)

  return<>
 
  <div className=" bg-gray-50  p-4 grid 
  grid-cols-1 
  sm:grid-cols-3 
  sm:mt-28
  lg:grid-cols-4 
  lg:mt-28
  gap-4 ">
  {
    products&&products.map((sofa,id)=>{
      return(
      
      <SofaCard key={id} sofa={sofa}/>
    
      )
    })
  }
  </div>

  </>

}

export default HomeProducts;
