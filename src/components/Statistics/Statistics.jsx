import { motion } from "framer-motion";
import stats from "../../data/stats";
import StatCard from "./StatCard";

export default function Statistics() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl text-white font-bold text-center"
        >
          Our Achievements
        </motion.h2>

        <p className="text-center text-orange-100 mt-4">
          Trusted by thousands of learners across India.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {stats.map((item) => (
            <StatCard
              key={item.id}
              stat={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}