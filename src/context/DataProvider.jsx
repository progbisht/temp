import { createContext } from "react";

import Img1 from "../assets/badrinath-dham.webp";
import Img2 from "../assets/2-dhaam.webp";
import Img3 from "../assets/3-dhaam.webp";
import Img4 from "../assets/4-dhaam.webp";
import Img5 from "../assets/badrinath-dham.webp";
import Img6 from "../assets/kedarnath-dham.webp";

import img1 from "../assets/tungnath.webp";
import img2 from "../assets/auli.webp";
import img3 from "../assets/devpryag.webp";
import img4 from "../assets/karanpryag.webp";
import img5 from "../assets/nandpryag.webp";
import img6 from "../assets/vishnupryag.webp";
import img7 from "../assets/harki-doon.webp";
import img8 from "../assets/haridwar.webp";
import img9 from "../assets/rishikesh.webp";
import img10 from "../assets/mussorie.webp";
import img11 from "../assets/nainital.webp";
import img12 from "../assets/kainchi-dham.webp";
import img13 from "../assets/badrinath-dham.webp";
import img14 from "../assets/kedarnath-dham.webp";
import img15 from "../assets/gangotri-dham.webp";
import img16 from "../assets/yamunotri-dham.webp";
import img17 from "../assets/valley-of-flowers.webp";
import img18 from "../assets/hemkund-sahib.webp";
import img19 from "../assets/jim-corbett.webp";
import img20 from "../assets/harshil.webp";
import img21 from "../assets/lansdowne.webp";
import img22 from "../assets/dhanaulti.webp";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const packagesData = [
    {
      id: 1,
      img: Img1,
      title: "EK DHAM TOUR PACKAGE",
      sightseeing: "Haridwar, Badrinath, Haridwar",
      description: [
        "02 Night Hotel Accommodation in Rudraprayag",
        "01 Night stay in Badrinath",
        "03 Breakfast 03 Dinner",
        "Pickup drop from Haridwar",
        "All sightseeing and transfer by cab",
      ],
      price: 8500,
      type: "Per Person",
      category: "Yatra",
    },
    {
      id: 2,
      img: Img2,
      title: "DO DHAM TOUR PACKAGE",
      sightseeing: "Haridwar, Badrinath, Haridwar",
      description: [
        "02 Night Hotel Accommodation in Guptkashi",
        "01 Night stay in Kedarnath",
        "02 Night Hotel Accommodation in Rudraprayag",
        "01 Night stay in Badrinath",
      ],
      price: 11500,
      type: "Per Person",
      category: "Yatra",
    },
    {
      id: 3,
      img: Img3,
      title: "TEEN DHAM TOUR PACKAGE",
      sightseeing: "Haridwar, Uttarkashi, Kedarnath, Badrinath, Haridwar",
      description: [
        "02 Night Hotel Accommodation in UTTARKASHI",
        "02 Night Hotel Accommodation in Guptkashi",
        "01 Night stay in Kedarnath",
        "01 Night Hotel Accommodation in Rudraprayag",
        "01 Night stay in Badrinath",
        "07 Breakfast 07 Dinner",
        "Pickup drop from Haridwar",
        "All sightseeing and transfer by cab",
      ],
      price: 14500,
      type: "Per Person",
      category: "Yatra",
    },
    {
      id: 4,
      img: Img4,
      title: "CHAR DHAM TOUR PACKAGE",
      sightseeing: "Haridwar, Uttarkashi, Kedarnath, Badrinath, Haridwar",
      description: [
        "02 Night Hotel Accommodation in BARKOT",
        "02 Night Hotel Accommodation in UTTARKASHI",
        "02 Night Hotel Accommodation in Guptkashi",
        "01 Night stay in Kedarnath",
        "01 Night Hotel Accommodation in Rudraprayag",
        "01 Night stay in Badrinath",
        "09 Breakfast 09 Dinner",
        "Pickup drop from Haridwar",
        "All sightseeing and transfer by cab",
      ],
      price: 17500,
      type: "Per Person",
      category: "Yatra",
    },
    {
      id: 5,
      img: Img5,
      title: "PANCH BADRI TOUR PACKAGE",
      sightseeing: "Haridwar, Badrinath, Haridwar",
      description: [
        "02 Night Hotel Accommodation in BARKOT",
        "02 Night Hotel Accommodation in UTTARKASHI",
        "02 Night Hotel Accommodation in Guptkashi",
        "01 Night stay in Kedarnath",
        "01 Night Hotel Accommodation in Rudraprayag",
        "01 Night stay in Badrinath",
        "09 Breakfast 09 Dinner",
        "Pickup drop from Haridwar",
        "All sightseeing and transfer by cab",
      ],
      price: 9500,
      type: "Per Person",
      category: "Yatra",
    },
    {
      id: 6,
      img: Img6,
      title: "PANCH KEDAR TOUR PACKAGE",
      sightseeing: "Haridwar, Badrinath, Haridwar",
      description: [
        "02 Night Hotel Accommodation in BARKOT",
        "02 Night Hotel Accommodation in UTTARKASHI",
        "02 Night Hotel Accommodation in Guptkashi",
        "01 Night stay in Kedarnath",
        "01 Night Hotel Accommodation in Rudraprayag",
        "01 Night stay in Badrinath",
        "09 Breakfast 09 Dinner",
        "Pickup drop from Haridwar",
        "All sightseeing and transfer by cab",
      ],
      price: 9500,
      type: "Per Person",
      category: "Yatra",
    },
  ];

  const destinationsData = [
    {
      id: 1,
      image: img1,
      title: "Tungnath",
      description:
        "Tungnath, the highest Shiva temple in the world, is part of the Panch Kedar temples and sits amidst the beautiful Garhwal Himalayas. Known for its deep spiritual significance, it is believed to be constructed by the Pandavas. Visitors are drawn to its serene atmosphere, majestic mountain views, and its connection to ancient legends.",
      location: "Rudrapryag",
      category: "Peace",
    },
    {
      id: 2,
      image: img2,
      title: "Auli",
      description:
        "Auli, also known as the ‘Skiing Capital of India,’ offers breathtaking views of Nanda Devi and other Himalayan peaks. With rich oak and coniferous forests, Auli has both natural beauty and a cultural connection to Garhwali traditions. It’s a hub for adventure seekers, offering skiing and trekking activities.",
      location: "Chamoli",
      category: "Adventure",
    },
    {
      id: 3,
      image: img3,
      title: "Devprayag",
      description:
        "Devprayag is a sacred town where the Alaknanda and Bhagirathi rivers merge to form the holy Ganga. Known as the 'Godly Confluence,' this place is of immense religious importance in Hinduism. Pilgrims visit to experience its spiritual atmosphere and witness the ancient Raghunath Temple, dedicated to Lord Rama.",
      location: "Tehri",
      category: "Peace",
    },
    {
      id: 4,
      image: img4,
      title: "Karnaprayag",
      description:
        "Karnaprayag, where the Pindar and Alaknanda rivers converge, is associated with the warrior Karna from the Mahabharata. The town is revered as a pilgrimage spot, with the Karna Temple adding to its significance. Surrounded by lush valleys, Karnaprayag is both spiritually and scenically enchanting.",
      location: "Chamoli",
      category: "Peace",
    },
    {
      id: 5,
      image: img5,
      title: "Nandprayag",
      description:
        "Nandprayag, the confluence of the Alaknanda and Nandakini rivers, holds mythological importance as the site associated with King Nanda. A pilgrimage spot for devotees, it is famed for its natural beauty, peaceful surroundings, and connection to ancient legends in Hinduism.",
      location: "Chamoli",
      category: "Peace",
    },
    {
      id: 6,
      image: img6,
      title: "Vishnuprayag",
      description:
        "Vishnuprayag is a sacred confluence of the Alaknanda and Dhauliganga rivers, dedicated to Lord Vishnu. The Vishnu Temple nearby attracts pilgrims and is surrounded by stunning mountain vistas. Its peaceful atmosphere and mythological associations make it a treasured site for visitors.",
      location: "Chamoli",
      category: "Peace",
    },
    {
      id: 7,
      image: img7,
      title: "Har Ki Doon",
      description:
        "Har Ki Doon, known as the ‘Valley of Gods,’ is a paradise for trekkers and nature lovers. Nestled in the heart of the Himalayas, this valley is believed to be a route used by the Pandavas to reach heaven. Its untouched natural beauty, alpine forests, and ancient villages are a cultural treasure.",
      location: "Uttarkashi",
      category: "Adventure",
    },
    {
      id: 8,
      image: img8,
      title: "Haridwar",
      description:
        "Haridwar, one of the seven holiest cities in Hinduism, is famous for the Ganga Aarti at Har Ki Pauri. Known as the Gateway to God, Haridwar attracts pilgrims from around the world, especially during the Kumbh Mela. Its rich spiritual ambiance and vibrant rituals offer a profound cultural experience.",
      location: "Haridwar",
      category: "Peace",
    },
    {
      id: 9,
      image: img9,
      title: "Rishikesh",
      description:
        "Rishikesh, often called the ‘Yoga Capital of the World,’ is a spiritual town along the Ganges. Known for its ashrams, meditation centers, and the iconic Laxman Jhula bridge, it attracts those seeking peace and spiritual growth. The town’s blend of adventure and spirituality creates a unique experience.",
      location: "Dehradun",
      category: "Peace",
    },
    {
      id: 10,
      image: img10,
      title: "Mussoorie",
      description:
        "Mussoorie, the ‘Queen of Hills,’ offers stunning vistas of the Shivalik ranges and Doon Valley. Established by the British, it has a colonial charm, evident in its architecture and old churches. Popular for its scenic beauty, it is a perfect retreat into nature and tranquility.",
      location: "Dehradun",
      category: "Adventure",
    },
    {
      id: 11,
      image: img11,
      title: "Nainital",
      description:
        "Nainital, with its beautiful Naini Lake, is a scenic hill station with mythological roots tied to Goddess Sati. It is a popular destination for boating and trekking and offers panoramic views from various points. The town is surrounded by lush hills, making it a beloved escape.",
      location: "Nainital",
      category: "Adventure",
    },
    {
      id: 12,
      image: img12,
      title: "Kainchi Dham",
      description:
        "Kainchi Dham is a spiritual ashram founded by Neem Karoli Baba, attracting followers worldwide, including renowned personalities like Steve Jobs and Mark Zuckerberg. Set amidst hills and rivers, it offers a peaceful retreat, blending natural beauty with profound spiritual energy.",
      location: "Nainital",
      category: "Peace",
    },
    {
      id: 13,
      image: img13,
      title: "Badrinath Dham",
      description:
        "Badrinath Dham, located in Uttarakhand, is a revered Hindu pilgrimage site dedicated to Lord Vishnu. It is one of the Char Dhams, believed to have been established by Adi Shankaracharya, symbolizing a pathway to salvation.",
      location: "Chamoli",
      category: "Yatra",
    },
    {
      id: 14,
      image: img14,
      title: "Kedarnath Dham",
      description:
        "Kedarnath Dham, dedicated to Lord Shiva, is known for its ancient temple and stunning mountain backdrop, with roots tracing back to the Mahabharata era.",
      location: "Rudrapryag",
      category: "Yatra",
    },
    {
      id: 15,
      image: img15,
      title: "Gangotri Dham",
      description:
        "Gangotri Dham honors the origin of the River Ganga, considered sacred for cleansing sins, and is tied to the legend of King Bhagirath's penance.",
      location: "Uttarkashi",
      category: "Yatra",
    },
    {
      id: 16,
      image: img16,
      title: "Yamunotri Dham",
      description:
        "Yamunotri Dham, the source of the Yamuna River, is dedicated to the Goddess Yamuna and symbolizes purity and protection from untimely death.",
      location: "Uttarkashi",
      category: "Yatra",
    },
    {
      id: 17,
      image: img17,
      title: "Valley of Flowers",
      description:
        "The Valley of Flowers, a UNESCO World Heritage site, is known for its alpine meadows filled with rare and vibrant flowers. Rich in biodiversity, the valley also holds cultural importance for its links to Hindu mythology and as a gateway for trekking to Hemkund Sahib.",
      location: "Chamoli",
      category: "Adventure",
    },
    {
      id: 18,
      image: img18,
      title: "Hemkund Sahib",
      description:
        "Hemkund Sahib, a Sikh pilgrimage site, is nestled amid the Himalayas near a glacial lake. Associated with Guru Gobind Singh, it offers a serene retreat for worshippers and trekkers, embodying peace and reverence amidst snow-capped peaks.",
      location: "Chamoli",
      category: "Yatra",
    },
    {
      id: 19,
      image: img19,
      title: "Jim Corbett National Park",
      description:
        "Jim Corbett National Park, India’s oldest national park, is renowned for its Bengal tiger population and rich wildlife. This natural sanctuary, named after the legendary hunter-turned-conservationist Jim Corbett, is a haven for ecotourists and wildlife enthusiasts.",
      location: "Nainital",
      category: "Adventure",
    },

    {
      id: 20,
      image: img20,
      title: "Harshil Valley",
      description:
        "Nestled in the heart of Uttarkashi, Harshil Valley is a serene Himalayan retreat known for its lush landscapes, apple orchards, and charming wooden houses. This quaint valley holds significant cultural heritage, revered by pilgrims on their way to Gangotri. Surrounded by dense deodar forests and the Bhagirathi River, it offers a peaceful respite for those seeking natural beauty. Rich in Garhwali culture, Harshil also attracts adventurers and spiritual seekers alike.",
      location: "Uttarkashi",
      category: "Adventure",
    },
    {
      id: 21,
      image: img21,
      title: "Lansdowne",
      description:
        "A picturesque hill station established by the British, Lansdowne is famed for its colonial charm and well-preserved historical sites. Known for its serene environment and lush oak and pine forests, it is home to the Garhwal Rifles Regiment. Visitors can explore the War Memorial, St. John’s Church, and Bhulla Lake, while soaking in the peaceful, untouched beauty of the Himalayas. Lansdowne remains a haven for nature lovers and history enthusiasts.",
      location: "Pauri",
      category: "Adventure",
    },
    {
      id: 22,
      image: img22,
      title: "Dhanaulti",
      description:
        "Dhanaulti, perched amidst towering pine and deodar forests, is a tranquil escape known for its scenic beauty and laid-back charm. Located near Mussoorie, it offers breathtaking views of the Himalayas, drawing nature enthusiasts and peace seekers alike. Dhanaulti’s Eco Park and Potato Farm provide insights into sustainable tourism and local agricultural practices. This charming town is steeped in cultural simplicity, ideal for those seeking an immersive experience of Himalayan tranquility.",
      location: "Tehri",
      category: "Adventure",
    },
  ];

  return (
    <DataContext.Provider
      value={{
        packagesData,
        destinationsData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
