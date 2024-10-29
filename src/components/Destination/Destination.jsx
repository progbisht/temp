import useData from "../../hooks/useData";
import DestinationCard from "./DestinationCard";

const Destination = () => {
  const { destinationsData } = useData();

  return (
    <>
      <span id="Destination"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="mb-20">
            <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-4 text-3xl font-bold">
              TOP DESTINATIONS
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {destinationsData.map((destination) => (
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
    </>
  );
};

export default Destination;
