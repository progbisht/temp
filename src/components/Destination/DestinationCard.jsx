// Card component to display individual destination
const DestinationCard = ({ image, title, description, location }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600  line-clamp-3">{description}</p>
        <div className="mt-4">
          <span className="inline-block bg-blue-100 text-blue-500 text-sm font-semibold rounded-full px-3 py-1">
            {location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
