import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PlaceCard from "./PackageCard";
import useData from "../../hooks/useData";

const Packages = ({ handleBookingPopup }) => {
  const { packagesData } = useData();

  const [packages, setPackages] = useState([]);
  const [activeMenu, setActiveMenu] = useState("Yatra");

  useEffect(() => {
    setPackages(packagesData.filter((pack) => pack.category === activeMenu));
  }, [activeMenu]);

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-4 text-3xl font-bold">
            OUR PACKAGES
          </h1>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <ul className="flex space-x-12 justify-center text-gray-700">
              <li
                className={`flex items-center space-x-3 cursor-pointer transition duration-200 ease-in-out transform hover:text-blue-500 hover:scale-105 ${
                  activeMenu === "Yatra" ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={() => setActiveMenu("Yatra")}
              >
                {/* Placeholder for Icon */}
                {/* <IoCamera className="icon text-2xl" /> */}
                <Link className="text-lg">Yatra Special</Link>
              </li>

              <li
                className={`flex items-center space-x-3 cursor-pointer transition duration-200 ease-in-out transform hover:text-blue-500 hover:scale-105 ${
                  activeMenu === "Peace" ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={() => setActiveMenu("Peace")}
              >
                {/* Placeholder for Icon */}
                {/* <IoAirplane className="icon text-2xl" /> */}
                <Link className="text-lg">Mental Peace</Link>
              </li>

              <li
                className={`flex items-center space-x-3 cursor-pointer transition duration-200 ease-in-out transform hover:text-blue-500 hover:scale-105 ${
                  activeMenu === "Adventure"
                    ? "text-blue-600 font-semibold"
                    : ""
                }`}
                onClick={() => setActiveMenu("Adventure")}
              >
                {/* Placeholder for Icon */}
                {/* <IoFastFood className="icon text-2xl" /> */}
                <Link className="text-lg">Adventure Special</Link>
              </li>
            </ul>
          </div>

          <div className="p-4 mt-4 bg-white rounded-lg shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
              {activeMenu === "Yatra" &&
                packages.map((item) => (
                  <PlaceCard
                    handleBookingPopup={handleBookingPopup}
                    key={item.id}
                    {...item}
                  />
                ))}
              {activeMenu === "Peace" &&
                packages.map((item) => (
                  <PlaceCard
                    handleBookingPopup={handleBookingPopup}
                    key={item.id}
                    {...item}
                  />
                ))}
              {activeMenu === "Adventure" &&
                packages.map((item) => (
                  <PlaceCard
                    handleBookingPopup={handleBookingPopup}
                    key={item.id}
                    {...item}
                  />
                ))}
            </div>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {packagesData.map((item) => (
              <PlaceCard
                handleBookingPopup={handleBookingPopup}
                key={item.id}
                {...item}
              />
            ))}
          </div> */}
        </section>
      </div>
    </>
  );
};

export default Packages;
