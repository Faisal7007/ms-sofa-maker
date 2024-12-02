"use client"
import React, { useState } from 'react'
import UserContext from './UserContext'

function UserContextProvider({ children }) {
  const [idx, setIdx] = useState('')
 
  
  return (
    <UserContext.Provider value={{ idx,setIdx}}>
      {children}
    </UserContext.Provider>
  )
}


export default UserContextProvider
