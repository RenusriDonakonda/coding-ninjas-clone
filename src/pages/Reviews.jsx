import { FaStar } from "react-icons/fa";
import testimonials from "../data/testimonials";

export default function Reviews() {
  return (
    <section className="bg-gray-50 min-h-screen py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="text-orange-500 uppercase tracking-widest font-semibold">
            Student Reviews
          </span>

          <h1 className="text-5xl font-bold mt-4">
            What Our Students Say
          </h1>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Thousands of learners have transformed their careers with
            Coding Ninjas. Read some of their experiences below.
          </p>

        </div>

        {/* Rating Summary */}

        <div className="bg-white rounded-2xl shadow-lg p-10 mt-16 flex flex-col md:flex-row justify-between items-center gap-8">

          <div>

            <h2 className="text-6xl font-bold text-orange-500">
              4.8
            </h2>

            <div className="flex gap-1 mt-3">

              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className="text-yellow-400 text-xl"
                />
              ))}

            </div>

            <p className="text-gray-600 mt-3">
              Average Rating from 50,000+ Learners
            </p>

          </div>

          <div className="grid grid-cols-2 gap-8">

            <div className="text-center">

              <h2 className="text-4xl font-bold text-orange-500">
                50K+
              </h2>

              <p className="text-gray-600">
                Students
              </p>

            </div>

            <div className="text-center">

              <h2 className="text-4xl font-bold text-orange-500">
                10K+
              </h2>

              <p className="text-gray-600">
                Placements
              </p>

            </div>

            <div className="text-center">

              <h2 className="text-4xl font-bold text-orange-500">
                120+
              </h2>

              <p className="text-gray-600">
                Courses
              </p>

            </div>

            <div className="text-center">

              <h2 className="text-4xl font-bold text-orange-500">
                500+
              </h2>

              <p className="text-gray-600">
                Mentors
              </p>

            </div>

          </div>

        </div>

        {/* Reviews */}

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >

              <div className="flex items-center gap-5">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover"
                />

                <div>

                  <h3 className="text-2xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.course}
                  </p>

                </div>

              </div>

              <div className="flex gap-1 mt-5">

                {[...Array(item.rating)].map((_, index) => (

                  <FaStar
                    key={index}
                    className="text-yellow-400"
                  />

                ))}

              </div>

              <p className="text-gray-600 leading-8 mt-6 italic">
                "{item.review}"
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}