
"use client"
import React from 'react';

function SofaCard({ sofa }) {

    // console.log(sofa.name,'Sofa')
  return (
    <div className="w-[400px] rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={sofa.imageURL} alt={sofa.name} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{sofa.name}</h2>
        <p className="text-gray-700 text-sm mb-2">{sofa.details.description}</p>
        {/* <div className="text-gray-600 mb-2">
          <p><strong>Type:</strong> {sofa.type}</p>
          <p><strong>Color:</strong> {sofa.details.color}</p>
          <p><strong>Material:</strong> {sofa.details.material}</p>
          <p><strong>Dimensions:</strong> {sofa.details.dimensions.width} x {sofa.details.dimensions.depth} x {sofa.details.dimensions.height}</p>
          <p><strong>Seating Capacity:</strong> {sofa.details.seatingCapacity}</p>
        </div> */}
        <ul className="list-disc list-inside text-gray-600">
          {sofa.details.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>

    
  );
}

export default SofaCard;
