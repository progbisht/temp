// import BlogsComp from "../components/Blogs/BlogsComp";
// import Location from "../components/Location/Location";

const TermsOfService = () => {
  return (
    <>
      <div className="container py-8 min-h-screen bg-gray-50 text-gray-800">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="mb-6 border-l-8 border-primary/50 pl-4 text-3xl font-bold text-black">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
          <p className="text-justify px-4 mb-6">
            Welcome to Esteem Travels! By using our website and services, you
            agree to the following terms and conditions. If you disagree with
            any part of these terms, please do not use our website.
          </p>
          <ul className="list-decimal pl-8 space-y-4 text-justify px-4">
            <li>
              Services Provided Esteem Travels provides travel planning, tour
              customization, and travel package booking services. Our packages
              may include accommodation, transportation, sightseeing, and other
              related services.
            </li>
            <li>
              Booking and Payment A deposit or full payment may be required at
              the time of booking, depending on the package and travel dates.
              All bookings are subject to availability, and prices may vary due
              to demand, seasonality, or changes in supplier costs. Payments can
              be made via credit card, bank transfer, or other payment methods
              specified on our website.
            </li>
            <li>
              User Responsibilities You are responsible for ensuring that all
              travel documents (passport, visas, etc.) are in order before
              travel. Esteem Travels is not liable for any missed or canceled
              trips due to incomplete or incorrect documentation.{" "}
            </li>
            <li>
              Changes and Cancellations Changes to bookings are allowed, subject
              to availability and any applicable fees. Cancellation requests
              must follow our refund and cancellation policy. Esteem Travels
              reserves the right to modify itineraries or services as needed,
              due to factors outside our control, such as weather or service
              availability.{" "}
            </li>
            <li>
              Liability Esteem Travels is not liable for any injury, loss, or
              damage arising from any service provider, accident, natural
              disaster, or other events outside our control. Travel insurance is
              highly recommended.
            </li>
            <li>
              {" "}
              Governing Law These terms are governed by the laws of [Your
              Country/State]. Any disputes will be handled in the courts of
              [Your Jurisdiction].
            </li>
          </ul>
          <p className="text-justify px-4 mt-6">
            For questions about our Privacy Policy, please contact us at
            <a
              href="mailto:contact@esteemtravels.com"
              className="text-primary underline ml-1"
            >
              contact@esteemtravels.com
            </a>
            .
          </p>
        </div>
      </div>
      {/* <Location />
          <BlogsComp /> */}
    </>
  );
};

export default TermsOfService;
