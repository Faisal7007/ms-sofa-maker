"use client";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { useFirebase } from "@/app/context/Firebase";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductDetails = () => {
  const [productData, setProductData] = useState(null);
  const router=useRouter()
  const firebase = useFirebase();
  const params = useParams();
  const id = params.slug;

  const [thumbnailPosition, setThumbnailPosition] = useState('left');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 450) {
        setThumbnailPosition('bottom');
      } else {
        setThumbnailPosition('left');
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  useEffect(() => {
    firebase.getProductById(id).then((data) => {
      const product = data.data();
      setProductData(product);
    });
  }, [id]);

  const images = productData?.imageUrls?.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  // const renderLeftNav = (onClick, disabled) => (
  //   <button
  //     className={`custom-left-arrow ${disabled ? "opacity-50" : ""}`}
  //     onClick={onClick}
  //     disabled={disabled}
  //   >
  //     &#9664; {/* Replace with your custom icon or SVG */}
  //   </button>
  // );

  // const renderRightNav = (onClick, disabled) => (
  //   <button
  //     className={`custom-right-arrow ${disabled ? "opacity-50" : ""}`}
  //     onClick={onClick}
  //     disabled={disabled}
  //   >
  //     &#9654; {/* Replace with your custom icon or SVG */}
  //   </button>
  // );

  if (productData) {
    
    return (
      <div className=" ">
      <Navbar/>
        <div className="w-[100%] mt-36 relative media-max-450px:mt-12">
       
          <div className="flex flex-col  md:flex-row">
          
            {/* Image Section */}
            <div className="md:w-[70%] image-gallery-thumbnails media-max-450px:px-4 ">
             
              
              <ImageGallery items={images} thumbnailPosition={thumbnailPosition}/>
             </div>
            

            {/* Product Details Section */}
          
            <div className="md:w-[30%]  p-4  ">
            <RiArrowGoBackFill onClick={()=>{router.back()}} className='size-8 cursor-pointer mb-4 '/>
              
              <div className="text-2xl font-bold josh_regular  mb-4">{productData.proName}</div>
              <p className="text-gray-600 mb-4">{productData.details.description}</p>

              <div className="mb-4 flex gap-1">
                <h3 className="font-semibold ">Color :</h3>
                <p>{productData.details.color}</p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold">Material:</h3>
                <p>{productData.details.material}</p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold">Dimensions:</h3>
                <div>
                <p>{"Total Width"} : {productData.details.dimensions.width} cm</p>
                <p>{"Total Depth"} : {productData.details.dimensions.depth} cm</p>
                 <p> {"Total Height"} : {productData.details.dimensions.height} cm</p> 
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold">Seating Capacity:</h3>
                <p>{productData.details.seatingCapacity} people</p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold">Features:</h3>
                <ul className="list-disc list-inside">
                  {productData.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    );
  }
};

export default ProductDetails;
