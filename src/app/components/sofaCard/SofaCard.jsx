
"use client"
import { useFirebase } from '@/app/context/Firebase';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import CardSkeleton from '../card-skeleton/CardSkeleton';
import ImageSkeleton from '../image-skeleton/ImageSkeleton';


function SofaCard({ sofa }) {
  const firebase = useFirebase();
  const [urls, setUrls] = useState(null);
  const router=useRouter()

      useEffect(() => {
        if (sofa.imageUrls) {
          
          firebase.getImageURL(sofa.imageUrls)
            .then((url) => {
              // console.log("Fetched URL:", url); 
              setUrls(url);
            })
            .catch((error) => {
              console.error("Error fetching image URL:",error);
            });
        }
    
      }, [sofa.imageUrls]);

      const handleProductDetails=()=>{
        router.push(`/product-details/${sofa.id}`)

      }

  return (
    <div className="rounded overflow-hidden shadow-lg bg-white pb-4 ">
    <div className='flex justify-center items-center'>
    <div className="w-96 h-64 overflow-hidden">
    {
      urls?( <Image  width={25}
              height={25} className="w-full h-full object-contain" src={urls} alt={sofa.proName} />):(<ImageSkeleton/>)
    }
    </div>
    </div>

      <div className="px-4">
        <div className="text-xl font-bold josh_regular mb-2 ">{sofa.proName.slice(0,30)}...</div>
        <p className="text-gray-700 w-[300px] text-sm mb-4">{sofa.details.description.slice(0,100)}...</p>
        {/* <div className="text-gray-600 mb-2">
          <p><strong>Type:</strong> {sofa.type}</p>
          <p><strong>Color:</strong> {sofa.details.color}</p>
          <p><strong>Material:</strong> {sofa.details.material}</p>
          <p><strong>Dimensions:</strong> {sofa.details.dimensions.width} x {sofa.details.dimensions.depth} x {sofa.details.dimensions.height}</p>
          <p><strong>Seating Capacity:</strong> {sofa.details.seatingCapacity}</p>
        </div> */}
        <div className="flex space-x-2 text-gray-600">
        {(() => {
    const randomIndex = Math.floor(Math.random() * sofa.details.features.length);
    const randomFeature = sofa.details.features[randomIndex];
    return (
    <div key={randomIndex}>#{randomFeature}</div>
    )
  })()}
        </div>
        <div onClick={handleProductDetails}  className='mt-4 text-end cursor-pointer text-color_dark_red1' >View details...</div>
      </div>
    </div>
  );
}

export default SofaCard;
