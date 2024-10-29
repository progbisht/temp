import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";
import { IoLocationSharp } from "react-icons/io5";

function PackageDetails() {
  const { id } = useParams(); // Get package ID from route params

  const { packagesData } = useData();

  const packageDetails = packagesData.find((pkg) => pkg.id === parseInt(id)); // Find the package details by ID

  console.log(packageDetails);

  if (!packageDetails) {
    return <p>Package not found.</p>;
  }

  const { img, title, sightseeing, description, type, price } = packageDetails;
  console.log(description);

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
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <IoLocationSharp className="text-red-500" />
            <span>{sightseeing}</span>
          </div>

          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            INR {price}{" "}
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {type}
            </span>
          </p>

          {/* <h2 className="text-2xl font-semibold mt-6">Itinerary</h2>
          <ul className="space-y-4 list-disc pl-5">
            {itinerary.map((day, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                <h3 className="font-semibold">Day {index + 1}</h3>
                <p>{day}</p>
              </li>
            ))}
          </ul> */}

          <h2 className="text-2xl font-semibold mt-6">Overview</h2>
          <ul className="space-y-2 list-disc pl-5">
            {description.map((data, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                {data}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PackageDetails;
