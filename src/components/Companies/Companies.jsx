import { motion } from "framer-motion";
import companies from "../../data/companies";

export default function Companies() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
            Hiring Partners
          </span>

          <h2 className="text-4xl font-bold mt-5">
            Our Students Work At
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Thousands of learners have been placed at India's leading
            product-based companies.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16">

          {companies.map((company) => (

            <motion.div
              key={company.id}
              whileHover={{
                scale: 1.08,
                y: -8,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 flex items-center justify-center h-32 p-6"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </motion.div>

          ))}

        </div>

      </div>
    </motion.section>
  );
}