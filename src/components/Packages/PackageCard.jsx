import { useState } from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";

const PackageCard = ({
  id,
  img,
  title,
  location,
  sightseeing,
  description,
  price,
  type,
  handleBookingPopup,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className="shadow-lg transition-all duration-500 hover:shadow-2xl dark:bg-slate-950 dark:text-white cursor-pointer rounded-lg overflow-hidden"
        onClick={handleBookingPopup}
      >
        <div className="relative overflow-hidden group">
          <img
            src={img}
            alt="No image"
            className="mx-auto h-[220px] w-full object-cover transition-transform duration-700 group-hover:skew-x-2 group-hover:scale-110 group-hover:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div className="space-y-3 p-4 bg-white dark:bg-slate-950 rounded-b-lg">
          <h1 className="line-clamp-1 font-bold text-xl text-gray-800 dark:text-white">
            {title}
          </h1>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <IoLocationSharp className="text-red-500" />
            <span>{location}</span>
          </div>
          <ul className="text-gray-700 dark:text-gray-300 line-clamp-5  list-disc pl-5">
            {description.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
          <div className="flex items-center justify-between border-t border-gray-300 dark:border-gray-700 pt-3 mt-3">
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                INR {price}{" "}
                <span className="text-sm text-gray-600 dark:text-gray-400 opacity-80">
                  {type}
                </span>
              </p>
            </div>

            <Link to={`/packages/${id}`}>
              <button className=" bg-primary hover:bg-primary/90 transition-transform duration-200 transform hover:scale-105 text-white px-5 py-3 rounded-full flex items-center gap-3 shadow-lg">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
