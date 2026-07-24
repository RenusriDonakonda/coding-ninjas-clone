import { FaStar } from "react-icons/fa";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">

      <img
        src={course.image}
        alt={course.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <h3 className="text-xl font-bold">
          {course.title}
        </h3>

        <p className="text-gray-500 mt-2">
          Duration: {course.duration}
        </p>

        <div className="flex items-center gap-2 mt-3">

          <FaStar className="text-yellow-500" />

          <span>{course.rating}</span>

          <span className="text-gray-500">
            ({course.students})
          </span>

        </div>

        <h2 className="text-2xl font-bold mt-4 text-orange-500">
          {course.price}
        </h2>

        <button className="w-full mt-5 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
          Enroll Now
        </button>

      </div>

    </div>
  );
}