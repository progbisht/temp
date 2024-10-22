import img1 from "../assets/tungnath.jpg"
import img2 from "../assets/auli.jpg"
import img3 from "../assets/devpryag.jpg"
import img4 from "../assets/karanpryag.jpg"
import img5 from "../assets/nandpryag.jpg"
import img6 from "../assets/vishnupryag.jpg"
import img7 from "../assets/harki-doon.jpg"
import img8 from "../assets/haridwar.jpg"
import img9 from "../assets/rishikesh.jpg"
import img10 from "../assets/mussorie.jpg"
import img11 from "../assets/nainital.jpg"


const destinations = [
  {
    id: 1,
    image: img1,
    title: 'Tungnath, Rudrapryag',
    description: 'Explore the romantic city of lights with its iconic Eiffel Tower, cafes, and art museums.',
    location: 'Tungnath, Rudrapryag'
  },
  {
    id: 2,
    image: img2,
    title: 'Auli, Chamoli',
    description: 'Discover the mix of tradition and technology in the vibrant capital city of Japan.',
    location: 'Auli, Chamoli'
  },
  {
    id: 3,
    image: img3,
    title: 'Devpryag, Tehri',
    description: 'Experience the hustle and bustle of the city that never sleeps, with its skyscrapers and famous landmarks.',
    location: 'Devpryag, Tehri'
  },
  {
    id: 4,
    image: img4,
    title: 'Karanpryag, Chamoli',
    description: 'Experience the hustle and bustle of the city that never sleeps, with its skyscrapers and famous landmarks.',
    location: 'Karanpryag, Chamoli'
  },
  {
    id: 5,
    image: img5,
    title: 'Nandpryag, Chamoli',
    description: 'Experience the hustle and bustle of the city that never sleeps, with its skyscrapers and famous landmarks.',
    location: 'Nandpryag, Chamoli'
  },
  {
    id: 6,
    image: img6,
    title: 'Vishnupryag, Chamoli',
    description: 'Experience the hustle and bustle of the city that never sleeps, with its skyscrapers and famous landmarks.',
    location: 'Vishnupryag, Chamoli'
  },
  {
    id: 7,
    image: img7,
    title: 'Har Ki Doon, Uttarkashi',
    description: 'Experience the hustle and bustle of the city that never sleeps, with its skyscrapers and famous landmarks.',
    location: 'Har Ki Doon, Uttarkashi'
  },
  {
    id: 8,
    image: img8,
    title: 'Haridwar, Haridwar',
    description: 'Experience the hustle and bustle of the city that never sleeps, with its skyscrapers and famous landmarks.',
    location: 'Haridwar, Haridwar'
  },
  {
    id: 9,
    image: img9,
    title: 'Rishikesh, Dehradun',
    description: 'Experience the hustle and bustle of the city that never sleeps, with its skyscrapers and famous landmarks.',
    location: 'Rishikesh, Dehradun'
  },
  {
    id: 10,
    image: img10,
    title: 'Mussoorie, Dehradun',
    description: 'Experience the hustle and bustle of the city that never sleeps, with its skyscrapers and famous landmarks.',
    location: 'Mussoorie, Dehradun'
  },
  {
    id: 11,
    image: img11,
    title: 'Nainital, Nainital',
    description: 'Experience the hustle and bustle of the city that never sleeps, with its skyscrapers and famous landmarks.',
    location: 'Nainital, Nainital'
  },
  // Add more destinations as needed
];

// Card component to display individual destination
const DestinationCard = ({ image, title, description, location }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4">
          <span className="inline-block bg-blue-100 text-blue-500 text-sm font-semibold rounded-full px-3 py-1">
            {location}
          </span>
        </div>
      </div>
    </div>
  );
};

const DestinationCards = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
        Top Destinations
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {destinations.map((destination) => (
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
