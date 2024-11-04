import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";
import { IoLocationSharp } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";

//

const PackageDetails = () => {
  const { id } = useParams(); // Get package ID from route params

  const { packagesData } = useData();

  const packageDetails = packagesData.find((pkg) => pkg.id === parseInt(id)); // Find the package details by ID

  console.log(packageDetails);

  if (!packageDetails) {
    return <p>Package not found.</p>;
  }

  // Destructure additional fields: sightseeing as an array and inclusive/exclusive items
  const {
    img,
    title,
    sightseeing,
    description,
    type,
    price,
    inclusives,
    exclusives,
  } = packageDetails;

  const handleBookNow = () => {
    alert(`Booking for ${packageDetails.title} confirmed!`); // Replace with actual booking logic
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-4 text-3xl font-bold">
        {title}
      </h1>
      <div className="shadow-lg rounded-lg overflow-hidden dark:bg-slate-950 dark:text-white">
        <img
          src={img}
          alt="Package image"
          className="w-full h-[600px] object-contain rounded-lg overflow-hidden"
        />
        <div className="p-6 space-y-4">
          <div className="text-xl font-semibold text-gray-900 dark:text-white">
            Sightseeing<span className="text-red-600">*</span>
          </div>
          <ul className="space-y-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
            {sightseeing.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>

          <div className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mt-4">
            <h2>Price:</h2>
            <span className="flex items-center">
              <FaRupeeSign className="text-xl" />
              {price}
              <span className="text-red-600">*</span>{" "}
            </span>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {type}
            </span>
          </div>

          <h2 className="text-2xl font-semibold mt-6">Overview</h2>
          <ul className="space-y-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
            {description.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>

          {/* <h2 className="text-2xl font-semibold mt-6">Inclusions</h2>
          <ul className="space-y-2 list-disc pl-5 text-green-600 dark:text-green-400">
            {inclusives.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Exclusions</h2>
          <ul className="space-y-2 list-disc pl-5 text-red-600 dark:text-red-400">
            {exclusives.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> */}
        </div>

        <div className="p-6 space-y-4">
          <p className="text-xl font-bold text-gray-900 dark:text-white">
            Note: Get detailed itinerary on call.
          </p>
          <p className="text-sm text-gray-900 dark:text-white">
            <span className="text-red-600">*</span> Price and sightseeing may
            vary depending on the selected tour package and duration.
          </p>
        </div>

        <button
          onClick={handleBookNow}
          className="mt-6 w-full py-3 text-lg font-semibold bg-primary hover:bg-primary/90 transition-transform duration-200 transform hover:scale-105 text-white "
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PackageDetails;
