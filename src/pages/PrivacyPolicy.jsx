// import BlogsComp from "../components/Blogs/BlogsComp";
// import Location from "../components/Location/Location";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="container py-8 min-h-screen bg-gray-50 text-gray-800">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="mb-6 border-l-8 border-primary/50 pl-4 text-3xl font-bold text-black">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
          <p className="text-justify px-4 mb-6">
            Esteem Travels values your privacy. This Privacy Policy explains how
            we collect, use, and protect your personal information when you use
            our website and services.
          </p>
          <ul className="list-decimal pl-8 space-y-4 text-justify px-4">
            <li>
              <span className="font-semibold">Information We Collect</span> —
              Personal Information: Name, contact information, payment details,
              travel preferences. Non-Personal Information: IP address, browser
              type, and other usage data collected through cookies.
            </li>
            <li>
              <span className="font-semibold">How We Use Your Information</span>{" "}
              — We use your information to: Process bookings and provide our
              travel services. Improve our services and personalize user
              experiences. Communicate special offers, travel tips, or other
              relevant updates (with consent).
            </li>
            <li>
              <span className="font-semibold">Information Sharing</span> —
              Esteem Travels may share your information with trusted partners
              (hotels, airlines, tour operators) for the purpose of fulfilling
              bookings. We do not sell or rent your information to third
              parties.
            </li>
            <li>
              <span className="font-semibold">Data Security</span> — We
              implement security measures to protect your personal information.
              However, no online system is entirely secure, and we cannot
              guarantee the absolute security of your data.
            </li>
            <li>
              <span className="font-semibold">Your Rights</span> — Access and
              Correction: You have the right to access and correct your personal
              information. Data Deletion: You may request that we delete your
              information, subject to legal or contractual obligations.
            </li>
            <li>
              <span className="font-semibold">Cookies</span> — Our website uses
              cookies to enhance user experience. By using our site, you consent
              to our use of cookies. You can control cookies through your
              browser settings.
            </li>
            <li>
              <span className="font-semibold">Changes to Policy</span> — Esteem
              Travels may update this policy periodically. Changes will be
              posted on this page with an updated effective date.
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

export default PrivacyPolicy;
