
"use client"
import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { FirebaseProvider, useFirebase } from '@/app/context/Firebase';
// import { ToastContainer } from 'react-toastify';
import Image from 'next/image';
import { RiArrowGoBackFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // redparts2001@gmail.com
  // Sufiy@n2001@

  
const loginFail = () => toast("Wrong email or password");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const firebase=useFirebase()
  const router = useRouter();

  const handleLogin = async(e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., validation or API call)
    // console.log(firebase);
    
      await firebase.LoginUser(formData.email,formData.password)
    
      setFormData({
         email: "",
         password: "",
     })
  };
  return (
  
    <div className="min-h-screen flex items-center justify-center bg-[url('/images/admin-login-bg.jpg')] bg-cover bg-center bg-gray-100 p-6">
  <div className="bg-[#dc8c88] relative shadow-md rounded-lg w-full max-w-md">
  <ToastContainer/>
    <div className=" h-56   rounded-tr-lg rounded-tl-lg   overflow-hidden  ">
      <Image    width={250}
              height={250} className="w-full h-full object-cover" src={"/images/admin-login-bg.jpg"} alt="Bg-image" />
    </div>
    {/* <ToastContainer /> */}
    <div className='p-8  '>
    <RiArrowGoBackFill onClick={()=>{router.push("/home")}} className='absolute top-10 size-5 cursor-pointer '/>
    <h2 className="text-2xl font-bold font josh_regular text-center mb-6"> Admin Log In</h2>
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#b05284]"
          required
        />
      </div>
      <div className="mb-4 relative">
        <label className="block text-gray-700 mb-2" htmlFor="password">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#b05284]"
          required
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-14 transform -translate-y-1/2 text-gray-500 focus:outline-none"
        >
          {showPassword ? <FaEyeSlash/> : <FaEye/>}
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-[#b05284] text-white py-2 rounded-md hover:bg-[#e84ea0] transition duration-200"
      >
        Log In
      </button>
    </form>
    </div>

  </div>
</div>
  )
}

export default Login
