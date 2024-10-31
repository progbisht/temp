import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useData from "../../hooks/useData";
import DestinationCard from "./DestinationCard";

const Destination = () => {
  const { destinationsData } = useData();

  const [destinations, setDestinations] = useState([]);
  const [activeMenu, setActiveMenu] = useState("Yatra");

  useEffect(() => {
    setDestinations(
      destinationsData.filter((dest) => dest.category === activeMenu)
    );
  }, [activeMenu]);

  return (
    <>
      <span id="Destination"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="mb-8">
            <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-4 text-3xl font-bold">
              TOP DESTINATIONS
            </h1>
          </div>
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
                <Link className="text-lg">Yatra</Link>
              </li>

              <li
                className={`flex items-center space-x-3 cursor-pointer transition duration-200 ease-in-out transform hover:text-blue-500 hover:scale-105 ${
                  activeMenu === "Peace" ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={() => setActiveMenu("Peace")}
              >
                {/* Placeholder for Icon */}
                {/* <IoAirplane className="icon text-2xl" /> */}
                <Link className="text-lg">Peace</Link>
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
                <Link className="text-lg">Adventure</Link>
              </li>
            </ul>
          </div>

          <div className="p-4 mt-4 bg-white rounded-lg shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
              {activeMenu === "Yatra" &&
                destinations.map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    image={destination.image}
                    title={destination.title}
                    description={destination.description}
                    location={destination.location}
                  />
                ))}
              {activeMenu === "Peace" &&
                destinations.map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    image={destination.image}
                    title={destination.title}
                    description={destination.description}
                    location={destination.location}
                  />
                ))}
              {activeMenu === "Adventure" &&
                destinations.map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    image={destination.image}
                    title={destination.title}
                    description={destination.description}
                    location={destination.location}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
