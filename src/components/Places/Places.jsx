import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/badrinath_dham.jpg";
import Img2 from "../../assets/kedarnath-dham.jpg";
import Img3 from "../../assets/gangotri_dham.jpg";
import Img4 from "../../assets/yamunotri_dham.jpg";
import Img5 from "../../assets/badrinath_dham.jpg";

const PlacesData = [
  {
    id: 1,
    img: Img1,
    title: "EK DHAM TOUR PACKAGE FROM HARIDWAR",
    sightseeing: "Haridwar, Badrinath, Haridwar",
    description: [
                  "02 Night Hotel Accommodation in Rudraprayag",
                  "01 Night stay in Badrinath",
                  "03 Breakfast 03 Dinner",
                  "Pickup drop from Haridwar",
                  "All sightseeing and transfer by cab"
                ],
    price: 8500,
    type: "Price Per Person",
  },
  {
    id: 2,
    img: Img2,
    title: "DO DHAM TOUR PACKAGE FROM HARIDWAR",
    sightseeing: "Haridwar, Badrinath, Haridwar",
    description:
      [
        "02 Night Hotel Accommodation in Guptkashi",
        "01 Night stay in Kedarnath",
        "02 Night Hotel Accommodation in Rudraprayag",
        "01 Night stay in Badrinath"
      ],
    price: 11500,
    type: "Price Per Person",
  },
  {
    id: 3,
    img: Img3,
    title: "TEEN DHAM TOUR PACKAGE FROM HARIDWAR",
    sightseeing: "Haridwar, Uttarkashi, Kedarnath, Badrinath, Haridwar",
    description:
      ["02 Night Hotel Accommodation in UTTARKASHI",
        "02 Night Hotel Accommodation in Guptkashi",
        "01 Night stay in Kedarnath",
        "01 Night Hotel Accommodation in Rudraprayag",
        "01 Night stay in Badrinath",
        "07 Breakfast 07 Dinner",
        "Pickup drop from Haridwar",
        "All sightseeing and transfer by cab"],
    price: 14500,
    type: "Price Per Person",
  },
  {
    id: 4,
    img: Img4,
    title: "CHAR DHAM TOUR PACKAGE FROM HARIDWAR",
    sightseeing: "Haridwar, Uttarkashi, Kedarnath, Badrinath, Haridwar",
    description: ["02 Night Hotel Accommodation in BARKOT",
                    "02 Night Hotel Accommodation in UTTARKASHI",
                    "02 Night Hotel Accommodation in Guptkashi",
                    "01 Night stay in Kedarnath",
                    "01 Night Hotel Accommodation in Rudraprayag",
                    "01 Night stay in Badrinath",
                    "09 Breakfast 09 Dinner",
                    "Pickup drop from Haridwar",
                    "All sightseeing and transfer by cab"],
    price: 17500,
    type: "Price Per Person",
  },
  {
    id: 5,
    img: Img5,
    title: "BADRINATH DHAM TOUR PACKAGE FROM DELHI",
    sightseeing: "Haridwar, Badrinath, Haridwar",
    description:
      ["02 Night Hotel Accommodation in Rudraprayag",
        "01 Night stay in Badrinath",
        "03 Breakfast 03 Dinner",
        "Pickup drop from Haridwar",
        "All sightseeing and transfer by cab"],
    price: 9500,
    type: "Price Per Person",
  },
  
  
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            OUR PACKAGES
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
