import { useState } from "react";
import Logo from "../../assets/website/logo.png";
import BookingForm from "../Booking/BookingForm";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Places",
    link: "/places",
  },
  {
    id: 4,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseClick = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      {/* <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white"> */}

      <div className="bg-white text-gray-950 shadow-md border-b border-gray-200">
        <div className="container py-4 mx-auto px-4 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo section */}

            <div>
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider"
              >
                <img src={Logo} alt="Logo" className="w-16" />
                {/* <span className="font-cursive">Your Brand</span> */}
              </a>
            </div>

            {/* Hamburger icon for mobile */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-950 border-primary/80 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Link section (right aligned) */}
            <div
              className={`hidden sm:flex justify-between items-center gap-4 ml-auto`}
            >
              <ul className="sm:flex items-center gap-6">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      // className="inline-block text-lg sm:text-xl py-2 px-3 text-gray-950 hover:text-primary transition-colors duration-200"
                      className="rounded-md px-3 py-2 text-sm sm:text-base font-medium text-gray-950 hover:text-primary transition-colors duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                className="bg-primary hover:bg-primary/90 transition-transform duration-200 transform hover:scale-105 text-white px-5 py-3 rounded-full flex items-center gap-3 shadow-lg"
                onClick={handleButtonClick}
              >
                Book Now
              </button>
            </div>
          </div>

          <BookingForm
            isFormOpen={isFormOpen}
            handleCloseClick={handleCloseClick}
          />
          {/* Mobile menu (visible when isOpen is true) */}
          {isOpen && (
            <div className="sm:hidden mt-4 p-4 border-2 border-primary/80 rounded-md transition-all duration-300 ease-in-out shadow-md">
              <ul className="space-y-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      // className="block text-lg py-2 text-center text-black/90 hover:text-white hover:bg-gray-300 px-4 rounded-md transition-colors duration-200"
                      className="block rounded-md px-3 py-2 text-sm text-center font-medium text-gray-950 hover:text-primary transition-colors duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                className="mt-4 w-full bg-primary hover:bg-primary/90 text-white px-5 py-3 rounded-full flex items-center justify-center gap-3 shadow-lg transition-transform duration-200 transform hover:scale-105"
                onClick={handleButtonClick}
              >
                Book Now
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
