import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomeProducts from "../components/home-products/HomeProducts";
// import Spinner from "../components/spinner/Spinner";

function Home() {
  return (
    <div className="font jost_regular ">
      <Navbar/>
      <Header/>
      <HomeProducts/>
      <Footer/>
    </div>
  );
}

export default Home;
