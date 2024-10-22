import React from "react";
// import Hero from "../components/Hero/Hero";
// import NatureVid from "../assets/video/main.mp4";
// import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
// import Testimonial from "../components/Testimonial/Testimonial";
// import Banner from "../components/Banner/Banner";
// import BannerPic from "../components/BannerPic/BannerPic";
// import BannerImg from "../assets/cover-women.jpg";
// import Banner2 from "../assets/travel-cover2.jpg";
// import OrderPopup from "../components/OrderPopup/OrderPopup";
import Hero from "../components/Hero/Hero";
import Destination from "../components/Destination/Destination.jsx";
import Banner from "../components/Banner/Banner.jsx";
// import AppStore from "../components/AppStore/AppStore.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      {/* <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={BannerImg} />
        <BlogsComp />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div> */}
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
        
        <Hero />
        <Destination />
        <Places handleOrderPopup={handleOrderPopup} />
        <Banner />
        {/* <AppStore /> */}
        <Testimonials />
        
    </div>
    </>
  );
};

export default Home;
