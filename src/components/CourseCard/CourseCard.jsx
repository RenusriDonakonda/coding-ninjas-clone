import { Link } from "react-router-dom";
import {
  FaClock,
  FaStar,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

export default function CourseCard({ course }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

      {/* Course Image */}

      <div className="relative overflow-hidden">

        <img
          src={course.image}
          alt={course.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
        />

        <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Bestseller
        </span>

        <span className="absolute top-4 right-4 bg-white text-orange-500 text-xs font-semibold px-3 py-1 rounded-full shadow">
          {course.category}
        </span>

      </div>

      {/* Card Body */}

      <div className="p-6">

        <h3 className="text-2xl font-bold text-gray-900 line-clamp-2 min-h-[64px]">
          {course.title}
        </h3>

        {/* Rating */}

        <div className="flex items-center justify-between mt-5">

          <div className="flex items-center gap-2">

            <FaStar className="text-yellow-400" />

            <span className="font-semibold">
              {course.rating}
            </span>

          </div>

          <div className="flex items-center gap-2 text-gray-500">

            <FaUsers />

            <span>{course.students}</span>

          </div>

        </div>

        {/* Duration */}

        <div className="flex items-center gap-2 mt-4 text-gray-600">

          <FaClock className="text-orange-500" />

          <span>{course.duration}</span>

        </div>

        {/* Placement */}

        <div className="mt-5">

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            Placement Assistance Included
          </span>

        </div>

        {/* Price */}

        <div className="flex justify-between items-center mt-8">

          <div>

            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <h2 className="text-3xl font-bold text-orange-500">
              {course.price}
            </h2>

          </div>

        </div>

        {/* Buttons */}

        <div className="grid grid-cols-2 gap-4 mt-8">

          <button className="border border-orange-500 text-orange-500 rounded-lg py-3 font-semibold hover:bg-orange-500 hover:text-white transition">
            View Details
          </button>

          <Link
            to="/contact"
            className="bg-orange-500 text-white rounded-lg py-3 font-semibold text-center hover:bg-orange-600 transition flex items-center justify-center gap-2"
          >
            Enroll

            <FaArrowRight />
          </Link>

        </div>

      </div>

    </div>
  );
}