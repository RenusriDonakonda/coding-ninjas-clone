import { useParams, Link } from "react-router-dom";
import {
  FaClock,
  FaUsers,
  FaStar,
  FaUserTie,
  FaSignal,
  FaLanguage,
  FaCertificate,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

import courses from "../data/courses";

export default function CourseDetails() {
  const { id } = useParams();

  const course = courses.find((item) => item.id === Number(id));

  if (!course) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold">Course Not Found</h1>

        <Link
          to="/courses"
          className="inline-block mt-8 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
        >
          Back to Courses
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left */}

          <div className="lg:col-span-2">

            <img
              src={course.image}
              alt={course.title}
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />

            <span className="inline-block mt-8 bg-orange-100 text-orange-600 px-4 py-2 rounded-full">
              {course.category}
            </span>

            <h1 className="text-5xl font-bold mt-5">
              {course.title}
            </h1>

            <p className="mt-6 text-gray-600 leading-8">
              Master this course with live classes, projects,
              assignments, interview preparation and placement
              assistance from industry experts.
            </p>

            {/* Info Grid */}

            <div className="grid md:grid-cols-2 gap-5 mt-10">

              <div className="bg-white rounded-xl shadow p-5 flex gap-4">
                <FaClock className="text-orange-500 text-3xl" />

                <div>
                  <p className="text-gray-500">Duration</p>
                  <h3 className="font-bold">{course.duration}</h3>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow p-5 flex gap-4">
                <FaUsers className="text-orange-500 text-3xl" />

                <div>
                  <p className="text-gray-500">Students</p>
                  <h3 className="font-bold">{course.students}</h3>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow p-5 flex gap-4">
                <FaStar className="text-yellow-500 text-3xl" />

                <div>
                  <p className="text-gray-500">Rating</p>
                  <h3 className="font-bold">{course.rating}/5</h3>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow p-5 flex gap-4">
                <FaUserTie className="text-orange-500 text-3xl" />

                <div>
                  <p className="text-gray-500">Mentor</p>
                  <h3 className="font-bold">{course.mentor}</h3>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow p-5 flex gap-4">
                <FaSignal className="text-orange-500 text-3xl" />

                <div>
                  <p className="text-gray-500">Level</p>
                  <h3 className="font-bold">{course.level}</h3>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow p-5 flex gap-4">
                <FaLanguage className="text-orange-500 text-3xl" />

                <div>
                  <p className="text-gray-500">Language</p>
                  <h3 className="font-bold">{course.language}</h3>
                </div>
              </div>

            </div>

            {/* Syllabus */}

            <div className="bg-white rounded-2xl shadow-lg mt-12 p-8">

              <h2 className="text-3xl font-bold mb-8">
                Course Syllabus
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                {course.syllabus.map((topic) => (

                  <div
                    key={topic}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-green-500" />

                    <span>{topic}</span>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Right Sidebar */}

          <div>

            <div className="sticky top-24 bg-white rounded-2xl shadow-xl p-8">

              <h2 className="text-4xl font-bold text-orange-500">
                {course.price}
              </h2>

              <p className="text-gray-500 mt-2">
                One-time payment
              </p>

              <Link
                to="/contact"
                className="block text-center mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl text-lg"
              >
                Enroll Now
              </Link>

              <hr className="my-8" />

              <div className="space-y-5">

                <div className="flex items-center gap-3">
                  <FaCertificate className="text-orange-500" />
                  <span>
                    {course.certificate
                      ? "Certificate Included"
                      : "No Certificate"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaBriefcase className="text-orange-500" />
                  <span>
                    {course.placement
                      ? "Placement Assistance"
                      : "Placement Not Included"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaClock className="text-orange-500" />
                  <span>{course.duration}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaUsers className="text-orange-500" />
                  <span>{course.students} enrolled</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}