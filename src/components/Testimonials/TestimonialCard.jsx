import { FaStar } from "react-icons/fa";

export default function TestimonialCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">

      <div className="flex items-center gap-4">

        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-xl font-bold">
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
            className="text-yellow-500"
          />
        ))}
      </div>

      <p className="mt-5 text-gray-600 leading-7">
        "{item.review}"
      </p>

    </div>
  );
}