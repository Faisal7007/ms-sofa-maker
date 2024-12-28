import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomeProducts from "../components/home-products/HomeProducts";
import DiscountSec from "../components/discount-sec/DiscountSec";
import TestimonialSection from "../components/testimonial/Testimonial";
// import Spinner from "../components/spinner/Spinner";

function Home() {
  return (
    <div className="font jost_regular ">
      <Navbar/>
      <Header/>
      <DiscountSec/>
      <TestimonialSection/>
      <HomeProducts/>
      <Footer/>
    </div>
  );
}

export default Home;
