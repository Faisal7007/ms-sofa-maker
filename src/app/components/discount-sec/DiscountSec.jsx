"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const DiscountBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const router=useRouter()

  useEffect(() => {
    // Set the fixed end time (2 days from when the component mounts)
    const offerEndTime = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;

    const countdown = () => {
      const now = new Date().getTime();
      const timeRemaining = offerEndTime - now;

      if (timeRemaining > 0) {
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      } else {
        clearInterval(timer); // Stop the timer when timeRemaining reaches 0
      }
    };

    const timer = setInterval(countdown, 1000);
    countdown(); // Initial call to avoid 1-second delay
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-500 to-color_dark_red1 text-white p-8 shadow-lg">
    <marquee behavior="" direction="">

      <h2 className="prose text-4xl font-bold font-josh_regular mb-2">Limited Time Offer!</h2>
      <p className="text-lg mb-4">Up to 40% Off on Luxury Sofas</p>
    </marquee>

      <p className="text-sm italic mb-6">Hurry! Offer Ends In:</p>
      <div className="flex space-x-4 justify-center text-xl font-bold mb-6">
        <div>
          <span className="block">{timeLeft.hours}</span>
          <span className="text-sm">Hours</span>
        </div>
        <div>
          <span className="block">{timeLeft.minutes}</span>
          <span className="text-sm">Minutes</span>
        </div>
        <div>
          <span className="block">{timeLeft.seconds}</span>
          <span className="text-sm">Seconds</span>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        {/* <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold shadow hover:bg-yellow-500">
          Shop the Sale
        </button> */}
        <button onClick={()=>{router.push('/products')}} className="border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black">
          Explore Collections
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
