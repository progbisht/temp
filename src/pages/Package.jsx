import useData from "../hooks/useData";
import PlaceCard from "../components/Packages/PackageCard";

const Package = () => {
  const { packagesData } = useData();

  const handleBookingPopup = () => {};

  return (
    <>
      <div className="container mx-auto px-4 py-4 min-h-screen">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-4 text-3xl font-bold">
          PACKAGES
        </h1>
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
    </>
  );
};

export default Package;
