"use client"

import React, { useEffect, useState } from "react";
import SofaCard from "../components/sofaCard/SofaCard";
import data from '../../data'

function Products() {
  
  console.log(data)
 
  return <div className="grid grid-cols-3 justify-items-center gap-4"  >

  {
    data.map((sofa,id)=>{
      return(
        

        <SofaCard key={id} sofa={sofa}/>
      

      )
    })
  }
  </div>
}

export default Products;
