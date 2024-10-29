import PlaceCard from "./PackageCard";
import useData from "../../hooks/useData";

const Packages = ({ handleOrderPopup }) => {
  const { packagesData } = useData();
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-4 text-3xl font-bold">
            OUR PACKAGES
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {packagesData.map((item) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Packages;
