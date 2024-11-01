import img1 from "../../assets/badrinath-dham.webp";
import img2 from "../../assets/kedarnath-dham.webp";
import img3 from "../../assets/gangotri-dham.webp";
import background from "../../assets/background.mp4";
import { useState } from "react";
import BookingForm from "../Booking/BookingForm";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseClick = () => {
    setIsFormOpen(false);
  };
  return (
    <>
      {/* <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-4xl sm:text-4xl lg:text-6xl font-bold"
              >
                We offer personalized {" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive"
                >
                  Travel
                </span>{" "}
                services.
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Call & Book
                </button>
              </div>
            </div>
            
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
            >
              <img
                data-aos-once="true"
                src={HeroPng}
                alt="img"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto rounded-full object-cover"
              />
              <div
                data-aos="fade-left"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10"
              >
                <h1 className="text-white">Jai Badri Vishal</h1>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10"
              >
                <h1 className="text-white">Jai Shree Kedar</h1>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0">
            
            
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Discover personalized {" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive"
                >
                  Travel Experiences
                </span>
                {" "}with us.
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-lg sm:text-xl text-gray-300 max-w-lg"
              >
                Plan your dream getaway with tailored packages, breathtaking sights, and exclusive deals. Let’s make your journey unforgettable.
              </p>
              <div data-aos="fade-up" data-aos-delay="500">
                <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full">
                  Call & Book
                </button>
              </div>
            </div>
            
            
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="flex justify-center items-center relative order-1 sm:order-2"
            >
              <img
                data-aos-once="true"
                src={HeroPng}
                alt="Traveler enjoying destination"
                className="w-[280px] sm:w-[420px] rounded-full object-cover shadow-lg"
              />
              <div
                data-aos="fade-left"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-lg absolute top-5 sm:top-10 left-5 sm:left-10 shadow-md"
              >
                <h2 className="text-white text-sm sm:text-base">Jai Badri Vishal</h2>
              </div>
              <div
                data-aos="fade-right"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-lg absolute bottom-5 sm:bottom-10 right-5 sm:right-10 shadow-md"
              >
                <h2 className="text-white text-sm sm:text-base">Jai Shree Kedar</h2>
              </div>
            </div>

          </div>
        </div>
      </div> */}

      <div className="min-h-[680px] sm:min-h-[800px] relative overflow-hidden text-white">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          src={background}
          alt="Travel destinations"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left z-10">
                <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold font-roboto leading-tight">
                  Discover personalized{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90  ">
                    Travel Experiences
                  </span>{" "}
                  with us.
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 max-w-lg">
                  Plan your dream getaway with tailored packages, breathtaking
                  sights, and exclusive deals.
                </p>
                <button
                  className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                  onClick={handleButtonClick}
                >
                  Call & Book
                </button>
              </div>
            </div>
          </div>
        </div>
        <BookingForm
          isFormOpen={isFormOpen}
          handleCloseClick={handleCloseClick}
        />
      </div>
    </>
  );
};

export default Hero;
