import useData from "../hooks/useData";
import PlaceCard from "../components/Packages/PackageCard";

const Package = () => {
  const { packagesData } = useData();

  const handleBookingPopup = () => {};

  return (
    <>
      <div className="container py-8 min-h-screen">
        <div className="p-4 mt-4 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
            {packagesData.map((item) => (
              <PlaceCard
                handleBookingPopup={handleBookingPopup}
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
