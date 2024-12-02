"use client"
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import { FaBuilding, FaGem, FaHome, FaHospital, FaHotel, FaRing } from "react-icons/fa";
import sofas from '../../sofa-data'
import Footer from "../components/footer";
import WhatsAppChat from "../components/whatsup/Whatsup";
import 'animate.css';

function Services() {
  const clients = [
    { name: "Sherwani Apartment", icon: <FaBuilding className="text-blue-600 text-2xl" />, bgColor: "bg-blue-100",address:'Bai ka bagh , Prayagraj' },
    { name: "JK Mahal", icon: <FaHotel className="text-green-600 text-2xl" />, bgColor: "bg-green-100",address:'Kareli , Daiwghat , Prayagraj'},
    { name: "JK Palace", icon: <FaGem className="text-yellow-600 text-2xl" />, bgColor: "bg-yellow-100",address:'Tashkent Marg , Civil Lines , Prayagraj' },
    { name: "Orra Jewelers", icon: <FaRing className="text-purple-600 text-2xl" />, bgColor: "bg-purple-100",address:"Sardar Patel Marg , Civil lines Prayagraj" },
    { name: "Khyber Apartment", icon: <FaHome className="text-red-600 text-2xl" />, bgColor: "bg-red-100",address:"GTB Nagar , Kareli , Prayagraj" },
    { name: "Yash Hospitals", icon: <FaHospital className="text-teal-600 text-2xl" />, bgColor: "bg-teal-100",address:"Lal Bahadur Shastri Marg , Civil Lines , Prayagraj" },
  ];




  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the animation starts
        }
      },
      { threshold: 0.5 } // Adjust threshold for when animation should trigger
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);




  return <div>
    <Navbar/>
    
    <div className="bg-gray-50 mt-28 media-max-450px:mt-16 min-h-screen pb-20 ">
    <div className="w-full relative">
  <Image
    src="/images/static-common-banner.avif"
    alt="banner"
    layout="responsive"
    width={400}
    height={500}
    className="object-cover"
  />
  <div
    className="
      text-gray-800 
      font-medium 
      text-[25px] 
      sm:text-[40px] 
      md:text-[50px] 
      lg:text-[65px] 
      absolute 
      top-1/2 
      left-1/2 
      transform 
      -translate-x-1/2 
      -translate-y-1/2 
      text-center
    "
  >
    Our Services
  </div>
</div>

    <div>
    <div className="bg-gray-50 mb-16 p-6">
      <div className="text-4xl text-color_dark_red1 font josh_regular font-bold  text-center mt-12 mb-12 animate__animated animate__backInLeft">Our Sofa Collection</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sofas.map((sofa, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 p-4"
          >
            <Image
              src={sofa.image}
              alt={sofa.name}
              layout="responsive"
              width={400}
              height={400}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <div className="text-xl font-semibold josh_regular mb-2">{sofa.name}</div>
              <div className="text-gray-600 font text-[14px] josh_regular">{sofa.description}</div>
              
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
      {/* Heading Section */}
      <div className="text-center mb-10">
            <h1
        ref={ref}
        className={`text-4xl font-bold text-color_dark_red1 mb-4 josh_regular ${
          isVisible ? 'animate__animated animate__backInLeft' : ''
        }`}
      >
        Our Esteemed <span className="josh_regular">Clients</span>
      </h1>
        <p className="text-gray-600 max-w-2xl mx-auto font jost_regular">
          We take pride in crafting customized sofas for our esteemed clients. Here's a selection of the projects we've had the privilege of working on.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {clients.map((client, index) => (
          <div
            key={index}
        ref={ref}

            className={`bg-white shadow-sm p-6 rounded-lg flex items-center space-x-4 hover:shadow-md hover:scale-104 transition-transform duration-200 ${isVisible?'animate__animated animate__zoomIn':''} `}
          >
            <div className={`${client.bgColor} p-3 rounded-full`}>
              {client.icon}
            </div>
            <div className="flex flex-col">

            <h3 className="text-lg font-semibold text-gray-700 font jost_regular">{client.name}</h3>
            <h1 className="text-gray-400 font jost_regular">{client.address}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* serivce cards */}
    <Footer/>
   
  </div>;
}

export default Services;
