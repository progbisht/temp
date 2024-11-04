import { Link } from "react-router-dom";
import FooterBg from "../../assets/website/footer.webp";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const FooterImpLinks = [
  {
    title: "Terms of service",
    link: "/terms-of-service",
  },
  {
    title: "Privacy policy",
    link: "/privacy-policy",
  },
  {
    title: "Refund and Cancellation",
    link: "/refund-and-cancellation-policy",
  },
];
const FooterQuickLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Places",
    link: "/places",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className=" text-white ">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <Link
              to="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Esteem Travels
            </Link>
            <p className=" text-justify pt-4">
              Esteem Travels – Your trusted partner for unforgettable journeys.
              We specialize in crafting personalized, budget-friendly travel
              experiences that capture the essence of every destination. With
              Esteem Travels, explore the world’s wonders, enjoy seamless
              service, and make memories that last a lifetime.
            </p>

            <div className="flex items-baseline flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 py-2">
              <p className="text-lg font-bold">
                Start your adventure with us today!
              </p>
              <Link
                to={`tel:+916398482452`}
                target="_blank"
                className="inline-block bg-primary hover:bg-primary/90 py-2 px-4 text-sm rounded-full"
              >
                Book a call
              </Link>
            </div>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-8">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterImpLinks.map((data, index) => (
                  <li key={index}>
                    <Link
                      to={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-8">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterQuickLinks.map((data, index) => (
                  <li key={index}>
                    <Link
                      to={data.link}
                      className="inline-block hover:scale-105 duration-200 "
                    >
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <p className="mb-3">Dehradun , Uttarakhand</p>
                <p className="mb-3">Badrinath , Uttarakhand</p>
                <p>+91 6398482452</p>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <Link to="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </Link>
                  <Link to="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </Link>
                  <Link to="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fixed footer */}
      <div className="bg-gradient-to-r from-primary to-secondary border-2 border-primary text-white ">
        <div className="container text-center">
          <p>
            &copy; {new Date().getFullYear()} Esteem Travels. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
