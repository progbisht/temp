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
