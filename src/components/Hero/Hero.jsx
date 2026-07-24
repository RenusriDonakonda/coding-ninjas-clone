import { motion } from "framer-motion";
import heroData from "./heroData";
import heroImage from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
            India's Trusted Learning Platform
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
            {heroData.title}
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            {heroData.subtitle}
          </p>

          <button className="mt-8 bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition">
            {heroData.buttonText}
          </button>

          {/* Stats */}
          <div className="flex gap-10 mt-12">
            {heroData.stats.map((item) => (
              <div key={item.text}>
                <h2 className="text-3xl font-bold text-orange-500">
                  {item.number}
                </h2>
                <p className="text-gray-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={heroImage}
            alt="Coding Illustration"
            className="w-full"
          />
        </motion.div>

      </div>
    </section>
  );
}