import { motion } from "framer-motion";

export default function StatCard({ stat }) {
  const Icon = stat.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-lg p-8 text-center"
    >
      <div className="flex justify-center">

        <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center">

          <Icon className="text-4xl text-orange-500" />

        </div>

      </div>

      <h2 className="text-4xl font-bold mt-6 text-orange-500">
        {stat.number}
      </h2>

      <p className="text-gray-600 mt-3">
        {stat.title}
      </p>
    </motion.div>
  );
}