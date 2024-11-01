import BannerImg from "../../assets/nainital.webp";
import { FaMountain } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import BgImg from "../../assets/background.webp";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage} className="relative bg-cover bg-center text-white">
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-gradient-to-r from-black/50 to-transparent">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <div data-aos="zoom-in" className="flex justify-center">
                <img
                  src={BannerImg}
                  alt="travel destination"
                  className="rounded-full object-cover w-80 h-80 shadow-xl border-4 border-white"
                />
              </div>

              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 text-left">
                <h1
                  data-aos="fade-up"
                  className="text-4xl sm:text-5xl font-bold"
                >
                  Discover Premium Tours
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-lg leading-7 tracking-wide"
                >
                  Explore the world's most stunning destinations with our
                  exclusive tour packages, crafted to give you unforgettable
                  experiences.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <FaClipboard className="text-3xl h-12 w-12 shadow-lg p-3 rounded-full bg-red-500/20" />
                      <span className="text-xl font-semibold">
                        Premium Packages
                      </span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="200"
                      className="flex items-center gap-3"
                    >
                      <FaMapLocationDot className="text-3xl h-12 w-12 shadow-lg p-3 rounded-full bg-orange-500/20" />
                      <span className="text-xl font-semibold">
                        Top Destinations
                      </span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="400"
                      className="flex items-center gap-3"
                    >
                      <FaMountain className="text-3xl h-12 w-12 shadow-lg p-3 rounded-full bg-yellow-500/20" />
                      <span className="text-xl font-semibold">
                        Refreshing Landscapes
                      </span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h2 className="text-3xl font-semibold">Mountain Peaks</h2>
                    <p className="text-lg">
                      Experience heights that touch the sky.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
