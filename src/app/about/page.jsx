import React from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import 'animate.css';

// import {motion}  from "framer-motion";


const About = () => {
  return (
    <>
  <Navbar/>
    <div className="bg-gray-50 mt-28 min-h-screen py-12 px-4 media-max-450px:mt-16 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="text-3xl sm:text-4xl font-bold josh_regular text-gray-800 mb-6 text-center">
          About Us
        </div>
        
        {/* Introduction Section */}
        <div className="flex flex-col items-center space-y-6 mb-12">
          <Image
            src="images/Salford_4+3+1.jpg" // Replace with your image path in the `public` folder
            alt="Modern Sofa Showroom"
            width={800}
            height={400}
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center max-w-2xl">
            Welcome to{" "}
            <span className="font-semibold text-gray-800 text-justify">
              MS Sofa Maker and Modern Furniture
            </span>
            , your trusted destination for premium-quality sofas and modern
            furniture. We are passionate about blending comfort, style, and
            durability to transform your spaces.
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 items-center mb-12">
          <div>
            <div className="text-xl sm:text-2xl font-semibold josh_regular text-color_dark_red1 mb-4">
              Who We Are
            </div>
            <p className="text-gray-600 text-justify leading-relaxed text-sm sm:text-base">
              At{" "}
              <span className="font-semibold text-gray-800">
                MS Sofa Maker
              </span>
              , we take pride in being artisans of comfort and elegance. With
              years of expertise in furniture design, we create custom-made
              furniture tailored to fit your unique preferences and lifestyle.
            </p>
          </div>
          <Image
            src="images/pexels-pixabay.jpg" // Replace with your image path
            alt="Craftsmanship"
            width={500}
            height={350}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Our Vision Section */}
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 items-center mb-12">
          <Image
            src="images/our-vision.webp" // Replace with your image path
            alt="Modern Furniture"
            width={500}
            height={350}
            className="w-full rounded-lg shadow-lg"
          />
   


          <div>
            <div className="text-xl sm:text-2xl font-semibold josh_regular text-color_dark_red1 mb-4">
              Our Vision
            </div>
            <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
              To transform living spaces into havens of comfort and
              sophistication by offering timeless and modern furniture designs
              that suit every taste and budget.
            </p>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mt-12">
          <div className="text-xl sm:text-2xl font-semibold josh_regular text-color_dark_red1 mb-6 text-center">
            What We Offer
          </div>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Offer Item */}
            <div className="flex flex-col justify-center items-center ">
            <div className="h-40 media-max-450px:w-full media-max-450px:h-52">

              <Image
                src="images/custom-sofa.jpg" // Replace with your image path
                alt="Custom Sofas"
                width={200}
                height={200}
                className="w-full h-full sm:w-40 rounded-lg shadow-lg"
              />
            </div>

              <p className="font-semibold text-gray-800 mt-4 text-sm sm:text-base">
                Custom Sofas
              </p>
              <p className="text-gray-600 text-center text-xs sm:text-sm">
                Handmade sofas tailored to fit your space and style preferences.
              </p>
            </div>
            {/* Offer Item */}
            <div className="flex flex-col justify-center items-center">
            <div className="h-40 media-max-450px:w-full media-max-450px:h-52">

              <Image
                src="images/modern-furniture.avif" // Replace with your image path
                alt="Modern Furniture"
                width={200}
                height={200}
                className="w-full h-full rounded-lg shadow-lg animate animate__pulse"
              />
            </div>

              <p className="font-semibold text-gray-800 mt-4 text-sm sm:text-base">
                Modern Furniture
              </p>
              <p className="text-gray-600 text-center text-xs sm:text-sm">
                A wide range of contemporary pieces to elevate your interiors.
              </p>
            </div>
            {/* Offer Item */}
            <div className="flex flex-col justify-center items-center">
            <div className="h-40 media-max-450px:w-full media-max-450px:h-52">

              <Image
                src="images/quality-craftmanship.jpg" // Replace with your image path
                alt="Quality Craftsmanship"
                width={200}
                height={200}
                className="w-full h-full rounded-lg shadow-lg"
              />
            </div>

              <p className="font-semibold text-gray-800 mt-4 text-sm sm:text-base">
                Quality Craftsmanship
              </p>
              <p className="text-gray-600 text-center text-xs sm:text-sm">
                Finest materials ensuring lasting durability.
              </p>
            </div>
            {/* Offer Item */}
            <div className="flex flex-col justify-center items-center">
            <div className="h-40 media-max-450px:w-full media-max-450px:h-52">

              <Image
                src="images/innovative-sofa.webp" // Replace with your image path
                alt="Innovative Designs"
                width={200}
                height={200}
                className="w-full h-full rounded-lg shadow-lg"
              />
            </div>

              <p className="font-semibold text-gray-800 mt-4 text-sm sm:text-base">
                Innovative Designs
              </p>
              <p className="text-gray-600 text-center text-xs sm:text-sm">
                Combining functionality with aesthetics to create furniture that
                stands out.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="text-xl sm:text-2xl font-semibold josh_regular text-color_dark_red1 mb-4">
            Contact Us
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Have questions or need assistance? We’re here to help.  
            <br />
            Reach out to us at:{" "}
            <span className="font-semibold">[redparts2001@gmail.com]</span>
          </p>
        </div>
      </div>
      </div>
      <div>
      <Footer/>
    </div>
    </>

  );
};

export default About;
