import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const PlaceCard = ({
  img,
  title,
  sightseeing,
  description,
  price,
  type,
  handleOrderPopup,
}) => {
  return (
    <>
      {/* <div
        className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer"
        onClick={handleOrderPopup}
      >
        <div className="overflow-hidden">
          <img
            src={img}
            alt="No image"
            className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>

        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
          <div className="flex items-center gap-2 opacity-70">
            <IoLocationSharp />
            <span>{sightseeing}</span>
          </div>
          <ul className="line-clamp-2">{
            description.map((data, index) => (
                <li key={index}>{data}</li>
              )
            )
          }</ul>
          <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
            <div className="opacity-70">
              <p>{type}</p>
            </div>
            <div>
              <p className="text-2xl font-bold">INR {price}</p>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className="shadow-lg transition-all duration-500 hover:shadow-2xl dark:bg-slate-950 dark:text-white cursor-pointer rounded-lg overflow-hidden"
        onClick={handleOrderPopup}
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
          <h1 className="line-clamp-1 font-bold text-xl text-gray-800 dark:text-white">{title}</h1>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <IoLocationSharp className="text-red-500" />
            <span>{sightseeing}</span>
          </div>
          <ul className="text-gray-700 dark:text-gray-300 line-clamp-4 list-disc pl-5">
            {description.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
          <div className="flex items-center justify-between border-t border-gray-300 dark:border-gray-700 pt-3 mt-3">
            <div className="text-gray-600 dark:text-gray-400 opacity-80">
              <p>{type}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">INR {price}</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default PlaceCard;
