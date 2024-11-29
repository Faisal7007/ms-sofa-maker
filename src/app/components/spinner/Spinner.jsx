
"use client"
import Image from 'next/image'
import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center'>
    <Image
    className='size-16'
        src={"/images/Spinner2.gif"}
        alt='Spinner'
        height={50}
        width={50}
    />
      
    </div>
  )
}

export default Spinner
