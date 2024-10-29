import useData from "../hooks/useData";
import DestinationCard from "../components/Destination/DestinationCard";

const DestinationCards = () => {
  const { destinationsData } = useData();
  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-4 text-3xl font-bold">
        Top Destinations
      </h1>

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
  );
};

export default DestinationCards;
