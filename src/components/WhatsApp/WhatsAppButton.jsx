import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <Link
      to="https://wa.me/6398482452" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
    >
      <FaWhatsapp size={32} /> {/* Increase the size here */}
    </Link>
  );
};

export default WhatsAppButton;
