"use client"
import { useFirebase } from '@/app/context/Firebase';
import React, { useEffect, useState } from 'react'
import ProductListCard from '../components/product-list-card/ProductListCard'

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const firebase=useFirebase()


    useEffect(() => {
        firebase.getAllProducts().then((product) => {
          // Extract the blog data and sort it
          const sortedProduct = product.docs
            .map((doc) => ({ id: doc.id, ...doc.data() })) // Create an array of blog data with IDs
            .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort in descending order by date
    
            setProducts(sortedProduct);
        });
      }, [firebase]);
      console.log(products,'list')
  return (
    <div>
        <ProductListCard products={products} setProducts={setProducts}/>
    </div>
  )
}

export default ProductList

        
