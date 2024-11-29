import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="mt-28 mb-10 w-full relative">
        <Image
          src="/images/static-common-banner.avif"
          className="w-full"
          alt="banner"
          width={1400}
          height={700}
        />
        <div className="text-gray-800 font-semibold text-4xl sm:text-5xl lg:text-[65px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          Contact Us
        </div>
      </div>
      <div className="  pb-10 bg-gray-50 flex flex-col lg:flex-row justify-between items-start px-6 sm:px-12 lg:px-20 mt-10 gap-10">
        {/* Address Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="text-2xl sm:text-3xl font-semibold">Come, meet us!</div>
          <div className="text-lg font-semibold">Manufactured, Packed & Marketed By</div>
          <div className="font-semibold">
            Address:
            <span className="text-sm font-normal"> 34/80 Rasoolpur Prayagraj</span>
          </div>
          <div className="">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Our Location</h2>
            <div className="w-full h-48 sm:h-80 lg:h-96 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.338420541243!2d81.82323682484493!3d25.42694697235766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398535291abb0735%3A0x6b1d4c1c95d1483e!2sRasulpur%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211016!5e0!3m2!1sen!2sin!4v1732216329286!5m2!1sen!2sin"
                referrerPolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div className="font-semibold text-gray-600 text-base sm:text-lg">
            Want to connect with us for something else?
          </div>
          <div className="font-semibold text-gray-600 text-base sm:text-lg">
            Message us here and we’ll get back to you soon!
          </div>
          <div className="mt-4">
            <form>
              {/* Name Input */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Enter Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#be2a3a]"
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Enter Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#be2a3a]"
                />
              </div>

              {/* Mobile Number Input */}
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-gray-700 font-medium">
                  Enter Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Your Mobile Number"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#be2a3a]"
                />
              </div>

              {/* Description Input */}
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-medium">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Write a description..."
                  rows="6"
                  className="w-full h-40 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#be2a3a]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#be2a3a] text-white p-2 rounded-md hover:bg-red-700 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
