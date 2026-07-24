import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaUsers,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";

import heroData from "./heroData";
import heroImage from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-50 via-white to-orange-50 py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">

            <FaStar />

            <span>4.8 Rated by 50,000+ Learners</span>

          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mt-8">

            {heroData.title}

          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            {heroData.subtitle}

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              to="/courses"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition"
            >
              Explore Courses
            </Link>

            <Link
              to="/contact"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              Enroll Now
            </Link>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-6 mt-14">

            {heroData.stats.map((item) => (

              <div key={item.text}>

                <h2 className="text-4xl font-bold text-orange-500">

                  {item.number}

                </h2>

                <p className="text-gray-600 mt-2">

                  {item.text}

                </p>

              </div>

            ))}

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          <img
            src={heroImage}
            alt="Coding Ninjas"
            className="w-full"
          />

          {/* Floating Card 1 */}

          <div className="absolute top-8 -left-6 bg-white shadow-xl rounded-xl p-4 hidden md:flex items-center gap-3">

            <FaUsers className="text-orange-500 text-3xl" />

            <div>

              <h3 className="font-bold text-xl">

                50K+

              </h3>

              <p className="text-sm text-gray-500">

                Students

              </p>

            </div>

          </div>

          {/* Floating Card 2 */}

          <div className="absolute bottom-16 -right-6 bg-white shadow-xl rounded-xl p-4 hidden md:flex items-center gap-3">

            <FaBriefcase className="text-green-500 text-3xl" />

            <div>

              <h3 className="font-bold text-xl">

                10K+

              </h3>

              <p className="text-sm text-gray-500">

                Placements

              </p>

            </div>

          </div>

          {/* Floating Card 3 */}

          <div className="absolute bottom-0 left-20 bg-white shadow-xl rounded-xl p-4 hidden lg:flex items-center gap-3">

            <FaLaptopCode className="text-blue-500 text-3xl" />

            <div>

              <h3 className="font-bold text-xl">

                100+

              </h3>

              <p className="text-sm text-gray-500">

                Live Courses

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}