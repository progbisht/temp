import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-primary text-white py-2 px-6 rounded-full text-lg hover:bg-primary/90 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
