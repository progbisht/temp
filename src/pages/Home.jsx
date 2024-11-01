import React from "react";
import Packages from "../components/Packages/Packages.jsx";
import Hero from "../components/Hero/Hero";
import Destination from "../components/Destination/Destination.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
// import BlogsComp from "../components/Blogs/BlogsComp";
// import AppStore from "../components/AppStore/AppStore.jsx";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
        <Hero />
        <Packages handleOrderPopup={handleOrderPopup} />
        <Destination />
        <Banner />
        {/* <AppStore /> */}
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
