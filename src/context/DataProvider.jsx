import { createContext } from "react";

import Img1 from "../assets/badrinath-dham.webp";
import Img2 from "../assets/2-dhaam.webp";
import Img3 from "../assets/3-dhaam.webp";
import Img4 from "../assets/4-dhaam.webp";
import Img5 from "../assets/panch-badri.webp";
import Img6 from "../assets/panch-kedar.webp";
import Img7 from "../assets/satopanth.webp";
import Img8 from "../assets/bedni-bugyal.webp";
import Img9 from "../assets/kanataal-trek.webp";
import Img10 from "../assets/valley-of-flowers.webp";
import Img11 from "../assets/roopkund.webp";
import Img12 from "../assets/harshil.webp";
import Img13 from "../assets/nainital.webp";
import Img14 from "../assets/kausani.webp";
import Img15 from "../assets/munsyari.webp";
import Img16 from "../assets/dhanaulti.webp";
import Img17 from "../assets/jim-corbett.webp";
import Img18 from "../assets/kainchi-dham.webp";
import Img19 from "../assets/rishikesh.webp";

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
import img23 from "../assets/dhaari-devi.webp";
import img24 from "../assets/surkanda-devi.webp";
import img25 from "../assets/jageshwar.webp";
import img26 from "../assets/kausani.webp";
import img27 from "../assets/rudrapryag.webp";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const packagesData = [
    {
      id: 1,
      img: Img1,
      title: "EK DHAM TOUR PACKAGE",
      location: "Chamoli",
      sightseeing: [
        "Haridwar, Rishikesh, Devpryag, Dhaari Devi, Rudrapryag, Karanpryag, Nandpryag, Joshimath, Badrinath, Mana, Bhim Pul, Sarswati River, Tapt Kund, Neelkanth Peak",
      ],
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
      location: "Rudrapryag, Chamoli",
      sightseeing: [
        "Haridwar, Rishikesh, Devpryag, Dhaari Devi, Rudrapryag, Gaurikund, Vasuki Tal, Bhairav Temple,  Karanpryag, Nandpryag, Joshimath, Badrinath, Mana, Bhim Pul, Sarswati River, Tapt Kund, Neelkanth Peak",
      ],
      description: [
        "02 Night Hotel Accommodation in Guptkashi",
        "01 Night stay in Kedarnath",
        "02 Night Hotel Accommodation in Rudraprayag",
        "01 Night stay in Badrinath",
      ],
      price: 11500,
      type: "Per Person",
      category: "Yatra",
    },
    {
      id: 3,
      img: Img3,
      title: "TEEN DHAM TOUR PACKAGE",
      location: "Uttarkashi, Rudrapryag, Chamoli",
      sightseeing: [
        "Haridwar, Rishikesh, Devpryag, Dhaari Devi, Rudrapryag, Gaurikund, Vasuki Tal, Bhairav Temple,  Karanpryag, Nandpryag, Joshimath, Badrinath, Mana, Bhim Pul, Sarswati River, Tapt Kund, Neelkanth Peak, Gaumukh Glaciar, Bhagirath Shila, Kedar Tal, Pandava Gufa",
      ],
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
      location: "Uttarkashi, Rudrapryag, Chamoli",
      sightseeing: [
        "Haridwar, Rishikesh, Devpryag, Dhaari Devi, Rudrapryag, Gaurikund, Vasuki Tal, Bhairav Temple,  Karanpryag, Nandpryag, Joshimath, Badrinath, Mana, Bhim Pul, Sarswati River, Tapt Kund, Neelkanth Peak, Gaumukh Glaciar, Bhagirath Shila, Kedar Tal, Pandava Gufa, Surya Kund, Hanuman Chatti, Divya Shila",
      ],
      description: [
        "02 Night Hotel Accommodation in BARKOT",
        "02 Night Hotel Accommodation in UTTARKASHI",
        "02 Night Hotel Accommodation in Guptkashi",
        "01 Night stay in Kedarnath",
        "01 Night Hotel Accommodation in Rudraprayag",
        "01 Night stay in Badrinath",
        "09 Breakfast 09 Dinner",
        "Pickup drop from Haridwar",
        "All sightseeing and transfer by cab",
      ],
      price: 17500,
      type: "Per Person",
      category: "Yatra",
    },
    {
      id: 5,
      img: Img5,
      title: "PANCH BADRI TOUR PACKAGE",
      location: "Chamoli",
      sightseeing: [
        "Haridwar, Rishikesh, Devpryag, Dhaari Devi, Rudrapryag, Karanpryag, Nandpryag, Tapovan, Shankracharya Math, Nanda Devi National Park, Joshimath, Pandukeshwar, Badrinath, Mana, Bhim Pul, Sarswati River, Tapt Kund, Neelkanth Peak",
      ],
      description: [
        "01 Night Hotel Accommodation in Joshimath",
        "01 Night Hotel Accommodation in Badrinath",
        "01 Night Hotel Accommodation in Bhavishya Badri",
        "01 Night Hotel Accommodation in Adi Badri",
        "01 Night Hotel Accommodation in Vridha Badri",
        "Daily Breakfast and Dinner",
        "Pickup and drop from Haridwar/Rishikesh",
        "All sightseeing and transfer by cab",
        "Visits to the holy shrines of Badrinath, Bhavishya Badri, Yogdhyan Badri, Adi Badri, and Vridha Badri",
        "Guided tour of spiritual and historic sites along the route",
      ],
      price: 9500,
      type: "Per Person",
      category: "Peace",
    },
    {
      id: 6,
      img: Img6,
      title: "PANCH KEDAR TOUR PACKAGE",
      location: "Rudrapryag, Chamoli",
      sightseeing: [
        "Haridwar, Rishikesh, Devpryag, Dhaari Devi, Rudrapryag, Gaurikund, Vasuki Tal, Bhairav Temple,  Guptkashi, Chandrashila, Chopta, Karanpryag, Nandpryag, Kalpeshwar Valley",
      ],
      description: [
        "02 Nights Hotel Accommodation in Guptkashi",
        "01 Night Hotel Accommodation in Kedarnath",
        "01 Night Hotel Accommodation in Tungnath",
        "01 Night Hotel Accommodation in Madmaheshwar",
        "01 Night Hotel Accommodation in Rudranath",
        "01 Night Hotel Accommodation in Kalpeshwar",
        "08 Breakfasts and 08 Dinners included",
        "Pickup and drop from Haridwar",
        "All sightseeing and temple visits via private cab",
        "Experienced guide for temple visits and trek assistance",
        "Daily travel assistance and support",
        "Opportunities for scenic hikes and nature exploration at each Kedar site",
      ],
      price: 9500,
      type: "Per Person",
      category: "Peace",
    },
    {
      id: 7,
      img: Img7, // Replace with the appropriate image variable
      title: "SATOPANTH TREK PACKAGE",
      location: "Chamoli",
      sightseeing: [
        "Haridwar, Rishikesh, Joshimath, Badrinath, Mana Village, Vyas Gufa, Ganesh Gufa, Bhim Pul, Saraswati River, Vasudhara Falls, Satopanth Tal, Neelkanth Peak, Chakratirtha, Balakun Peak",
      ],
      description: [
        "01 Night Hotel Accommodation in Joshimath",
        "01 Night stay in Badrinath",
        "03 Nights Camp Accommodation en route to Satopanth Tal",
        "06 Breakfast and 06 Dinner",
        "Pickup and drop from Haridwar",
        "All transfers and sightseeing by cab",
        "Guided trek to Satopanth Tal with trekking equipment",
      ],
      price: 22000,
      type: "Per Person",
      category: "Trekking",
    },
    {
      id: 8,
      img: Img8,
      title: "BEDNI BUGYAL TREK PACKAGE",
      location: "Chamoli",
      sightseeing: [
        "Haridwar, Rishikesh, Karnaprayag, Lohajung, Wan Village, Bedni Bugyal, Ali Bugyal, Neelganga River, Ghairoli Patal, Mt. Trishul and Nanda Ghunti viewpoints, Bedni Kund",
      ],
      description: [
        "01 Night Hotel Accommodation in Lohajung",
        "01 Night Camping in Ghairoli Patal",
        "02 Nights Camping in Bedni Bugyal",
        "01 Night Hotel Accommodation in Wan Village",
        "05 Breakfasts, 05 Dinners",
        "Pickup and drop from Haridwar",
        "All trekking gear and camping equipment provided",
        "Experienced guide for trek and campsite setup",
        "Porters and mules for carrying luggage",
      ],
      price: 12500,
      type: "Per Person",
      category: "Trekking",
    },
    {
      id: 9,
      img: Img9,
      title: "KANA TAAL TREK PACKAGE",
      location: "Rudrapryag",
      sightseeing: [
        "Rishikesh, Devprayag, Srinagar, Rudraprayag, Ukhimath, Chopta, Tungnath Temple, Chandrashila Peak, Kana Taal Lake, dense oak and rhododendron forests, Himalayan viewpoints",
      ],
      description: [
        "01 Night Hotel Accommodation in Ukhimath",
        "01 Night camping near Chopta",
        "01 Night camping at Kana Taal",
        "05 Breakfasts and 05 Dinners",
        "Pickup and drop from Rishikesh",
        "Guided trek from Chopta to Kana Taal",
        "All transfers and sightseeing by private cab",
        "Experienced trek guide for safe navigation",
        "Trekking permits and forest entry fees included",
      ],
      price: 14500,
      type: "Per Person",
      category: "Trekking",
    },
    {
      id: 10,
      img: Img10,
      title: "VALLEY OF FLOWERS TREK PACKAGE",
      location: "Chamoli",
      sightseeing: [
        "Govindghat, Ghangaria, Valley of Flowers National Park, Hemkund Sahib, Bhyundar Valley, Ghangaria Waterfall, Flora and Fauna of the Valley, Surrounding Himalayan Peaks, Laxman Jhula, Joshimath",
      ],
      description: [
        "02 Night Hotel Accommodation in Govindghat",
        "02 Night Hotel Accommodation in Ghangaria",
        "01 Night stay at Hemkund Sahib",
        "Daily Breakfast and Dinner included",
        "Pickup and drop from Haridwar",
        "All sightseeing and transfers via private cab",
        "Guided trek through the Valley of Flowers",
        "Experience diverse flora and fauna unique to the region",
        "Visit to the sacred Hemkund Sahib Gurudwara",
        "Opportunities for photography and nature exploration",
      ],
      price: 18500,
      type: "Per Person",
      category: "Trekking",
    },
    {
      id: 11,
      img: Img11,
      title: "ROOPKUND TREK PACKAGE",
      location: "Chamoli",
      sightseeing: [
        "Lohajung, Bedni Bugyal, Roopkund Lake, Ali Bugyal, Kalu Vinayak, Didana, Kherna, Hathi Ghar, and beautiful alpine meadows and landscapes.",
      ],
      description: [
        "02 Nights Hotel Accommodation in Lohajung",
        "04 Nights Camping Accommodation during the trek",
        "All meals included (6 Breakfasts, 6 Lunches, 6 Dinners)",
        "Experienced local guide and support staff",
        "Trekking permits and all necessary equipment",
        "Pickup from Kathgodam railway station and drop off after the trek",
        "All transportation during the trek",
        "Spectacular views of the Himalayan ranges, including Nanda Ghunti and Trishul.",
      ],
      price: 12000,
      type: "Per Person",
      category: "Trekking",
    },
    {
      id: 12,
      img: Img12, // Add appropriate image for Harshil Valley
      title: "HARSHIL VALLEY EXPLORATION PACKAGE",
      location: "Uttarkashi",
      sightseeing: [
        "Harshil Valley, Gangotri Temple, Bhagirathi River, Harsil Village, Dharali, Neelkanth Peak, Jhala, Kedar Tal, Surya Kund, Ganga Valley, Bhagirath Shila, Gaumukh Glacier, Mukhyaprana Temple, Uttarkashi",
      ],
      description: [
        "02 Nights Hotel Accommodation in Harshil",
        "01 Night Hotel Accommodation in Uttarkashi",
        "01 Night Hotel Accommodation in Gangotri",
        "Daily breakfast and dinner included (5 meals total)",
        "Pickup and drop from Haridwar",
        "All sightseeing and transfers by private cab",
        "Guided treks to scenic spots and local attractions",
        "Explore the pristine nature and culture of Harshil Valley",
      ],
      price: 15900, // Adjusted price for Harshil Valley exploration
      type: "Per Person",
      category: "Adventure",
    },

    {
      id: 13,
      img: Img13,
      title: "Nainital Tour Package",
      location: "Nainital",
      sightseeing: [
        "Naini Lake, Naina Devi Temple, Snow View Point, Tiffin Top, Land's End, Bhimtal Lake, Sattal Lakes, Mukteshwar Temple, Governor's House, Mall Road, Eco Cave Gardens, Pangot, Kilbury Bird Sanctuary, Nainital Zoo",
      ],
      description: [
        "02 Nights Hotel Accommodation in Nainital",
        "01 Night Hotel Accommodation in Bhimtal",
        "01 Night Hotel Accommodation in Sattal",
        "Daily Breakfast and Dinner included",
        "Pickup and drop from Kathgodam Railway Station",
        "All sightseeing and transfers by private cab",
        "Guided tour of local attractions and nature spots",
        "Adventure activities like boating, trekking, and bird watching available",
        "Opportunities for scenic photography and exploration of nature trails",
      ],
      price: 12000,
      type: "Per Person",
      category: "Adventure",
    },
    {
      id: 14,
      img: Img14, // Replace with the actual image for Kausani
      title: "KAUSANI ADVENTURE TOUR PACKAGE",
      location: "Bageshwar",
      sightseeing: [
        "Kausani Tea Estate, Baijnath Temple, Anasakti Ashram, Kausani Planetarium, Bageshwar, Pindari Glacier, Khaliya Top, Gwaldam, Jim Corbett National Park, Gaurikund, Someshwar Temple, Nanda Devi Temple, Nainital, Almora, Kausani Market",
      ],
      description: [
        "02 Nights Hotel Accommodation in Kausani",
        "01 Night Hotel Accommodation in Almora",
        "01 Night stay in Bageshwar",
        "Daily Breakfast and Dinner included",
        "Pickup and drop from Kathgodam railway station",
        "All sightseeing and transfers by private cab",
        "Adventure activities like trekking, camping, and nature walks",
        "Guided tours to local attractions and heritage sites",
      ],
      price: 14500,
      type: "Per Person",
      category: "Adventure",
    },
    {
      id: 15,
      img: Img15, // Replace with the relevant image for Munsyari
      title: "MUNSYARI ADVENTURE TOUR PACKAGE",
      location: "Pithoragarh",
      sightseeing: [
        "Munsyari, Khaliya Top, Thamri Kund, Nanda Devi Temple, Munsyari Village, Panchachuli Base Camp, Birthi Falls, Milam Glacier, Gori River, Kafni Glacier, Namik Glacier, Adi Kailash, Jauljibi, Dharchula, Pithoragarh Fort",
      ],
      description: [
        "02 Night Hotel Accommodation in Munsyari",
        "01 Night Hotel Accommodation in Pithoragarh",
        "Daily breakfast and dinner included",
        "Adventure activities including trekking, camping, and nature walks",
        "Pickup and drop from Kathgodam",
        "All sightseeing and transfers by cab",
        "Experienced guide for trekking and local exploration",
        "Visit to the stunning Khaliya Top for breathtaking views",
      ],
      price: 13900,
      type: "Per Person",
      category: "Adventure",
    },
    {
      id: 16,
      img: Img16, // Image for the Dhanaulti Adventure Tour
      title: "DHANAULTI ADVENTURE TOUR PACKAGE",
      location: "Tehri",
      sightseeing: [
        "Dhanaulti Eco Park, Surkanda Devi Temple, Tehri Lake, Chamba, Kanatal, Mall Road Mussoorie, Kempty Falls, Gun Hill Point, Dhanaulti Adventure Park, Himalayan Nature Park, Potato Farm Tour",
      ],
      description: [
        "02 Nights Hotel Accommodation in Dhanaulti",
        "01 Night Hotel Accommodation in Mussoorie",
        "Adventure activities like trekking, zip-lining, and rock climbing",
        "Daily breakfast and dinner included",
        "Guided sightseeing tours to all major attractions",
        "Pickup and drop from Dehradun",
        "All transfers by comfortable cab",
      ],
      price: 12999, // Adjusted price for the adventure package
      type: "Per Person",
      category: "Adventure",
    },
    {
      id: 17,
      img: Img17,
      title: "JIM CORBETT TOUR PACKAGE",
      location: "Jim Corbett National Park, Uttarakhand",
      sightseeing: [
        "Jim Corbett National Park, Dhikala Zone, Bijrani Zone, Jhirna Zone, Kosi River, Corbett Waterfall, Garjiya Devi Temple, Dhangari Gate, Wildlife Jeep Safari, Bird Watching, Nature Walks, River Rafting in Kosi River, Elephant Ride",
      ],
      description: [
        "02 Nights Hotel Accommodation in Jim Corbett",
        "All meals included (Breakfast, Lunch, Dinner)",
        "Wildlife Jeep Safari in Jim Corbett National Park",
        "Guided nature walks and bird watching tours",
        "Visit to Corbett Waterfall and Garjiya Devi Temple",
        "Pickup and drop from Ramnagar Railway Station",
        "All sightseeing and transfers by private vehicle",
      ],
      price: 12000,
      type: "Per Person",
      category: "Adventure",
    },

    {
      id: 18,
      img: Img18, // Replace with your image source
      title: "KAINCHI DHAAM AND JAGESHWAR DHAAM TOUR PACKAGE",
      location: "Nainital, Almora",
      sightseeing: [
        "Nainital, Bhimtal, Sattal, Naukuchiatal, Kainchi Dham, Jageshwar Dham, Jageshwar Temple Complex, Patal Bhuvaneshwar, Almora, Kasar Devi Temple, Mukteshwar, and scenic viewpoints",
      ],
      description: [
        "02 Night Hotel Accommodation in NAINITAL",
        "02 Night Hotel Accommodation in ALMORA",
        "01 Night stay in KAINCHI DHAAM",
        "01 Night Hotel Accommodation in JAGESHWAR",
        "07 Breakfasts and 07 Dinners included",
        "Pickup and drop from Kathgodam railway station",
        "All sightseeing and transfers by private cab",
        "Guided tours of Kainchi Dham and Jageshwar Temple Complex",
        "Opportunities for nature walks and local sightseeing",
      ],
      price: 15500, // Example price per person
      type: "Per Person",
      category: "Peace",
    },
    {
      id: 19,
      img: Img19,
      title: "RISHIKESH ADVENTURE TOUR PACKAGE",
      location: "Rishikesh, Uttarakhand",
      sightseeing: [
        "Ganga Aarti at Triveni Ghat",
        "River Rafting on the Ganges",
        "Bungee Jumping at Mohan Chatti",
        "Trekking to Neer Garh Waterfall",
        "Camping near the Ganges",
        "Yoga and Meditation sessions",
        "Visit to Beatles Ashram",
        "Zip-lining over the Ganges",
        "Kunjapuri Temple Sunrise Trek",
        "Paragliding in Rishikesh",
        "Exploration of Laxman Jhula and Ram Jhula",
        "Visit to the Neelkanth Mahadev Temple",
      ],
      description: [
        "02 Nights Hotel Accommodation in Rishikesh",
        "Adventure activities including river rafting, bungee jumping, and trekking",
        "Yoga and meditation sessions for relaxation and rejuvenation",
        "All meals included: 02 Breakfast, 02 Lunch, 02 Dinner",
        "Pickup and drop from Haridwar",
        "All sightseeing and activities transferred by cab",
        "Experienced guides for all adventure activities",
      ],
      price: 13999,
      type: "Per Person",
      category: "Peace",
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
    {
      id: 23,
      image: img23,
      title: "Maa Dhaari Devi",
      description:
        "Maa Dhaari Devi is a revered shrine near Srinagar, Uttarakhand, honoring the goddess as a protector of locals. Perched on the banks of the Alaknanda River, it offers spiritual serenity against a stunning Himalayan backdrop. The temple's history dates back centuries and embodies the rich cultural tapestry of the Garhwal region.",
      location: "Srinagar",
      category: "Peace",
    },
    {
      id: 24,
      image: img24,
      title: "Maa Surkanda Devi",
      description:
        "Located near Dhanaulti in Tehri, the Maa Surkanda Devi temple is dedicated to Goddess Parvati. Known for its vibrant local festivals, this sacred site is part of the famous Shaktipeeth pilgrimage and offers breathtaking views of the snow-clad Himalayas, deeply resonating with the spiritual heritage of Uttarakhand.",
      location: "Tehri",
      category: "Peace",
    },
    {
      id: 25,
      image: img25,
      title: "Jageshwar Dham",
      description:
        "Nestled in Almora, Jageshwar Dham is a complex of over 100 ancient temples dating back to the 9th century. Dedicated to Lord Shiva, it is an architectural marvel and a significant spiritual site, reflecting the profound Shaivite tradition and cultural legacy of the Kumaon region.",
      location: "Almora",
      category: "Peace",
    },
    {
      id: 26,
      image: img26,
      title: "Kausani",
      description:
        "Renowned for its panoramic views of the Himalayas, Kausani in Bageshwar is an adventurer’s haven and a poet’s muse. This idyllic town is celebrated for its natural beauty, as well as for inspiring Mahatma Gandhi, who likened it to the beauty of Switzerland.",
      location: "Bageshwar",
      category: "Adventure",
    },
    {
      id: 27,
      image: img27,
      title: "Rudrapryag",
      description:
        "Set at the confluence of the Alaknanda and Mandakini rivers, Rudraprayag is both a serene town and a site of mythological significance. Known for its spiritual atmosphere, it is a key stop on the Char Dham pilgrimage, celebrating the cultural and religious heritage of Uttarakhand.",
      location: "Rudraprayag",
      category: "Peace",
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
