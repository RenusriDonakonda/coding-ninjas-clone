import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-orange-50 px-6">

      <div className="text-center max-w-xl">

        <FaExclamationTriangle className="text-7xl text-orange-500 mx-auto" />

        <h1 className="text-7xl font-bold mt-8">
          404
        </h1>

        <h2 className="text-3xl font-semibold mt-5">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-6 leading-8">
          Sorry! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-10 bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition"
        >
          Back to Home
        </Link>

      </div>

    </section>
  );
}