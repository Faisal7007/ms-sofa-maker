import React from 'react'

const CardSkeleton = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-gray-200  animate-pulse">
  <div className="flex justify-center items-center">
    <div className="w-96 h-64 bg-gray-300"></div>
  </div>
  <div className="p-4">
    <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
    <div className="h-4 bg-gray-300 rounded mb-4 w-5/6"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3"></div>
      <div className="h-4 bg-gray-300 rounded w-1/5"></div>
    </div>
    <div className="flex space-x-2 mt-4">
      <div className="h-4 bg-gray-300 rounded w-12"></div>
      <div className="h-4 bg-gray-300 rounded w-12"></div>
    </div>
  </div>
</div>

  )
}

export default CardSkeleton
