import { FaStar } from "react-icons/fa";

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-xl font-bold">
        {review.name}
      </h2>

      <p className="text-gray-500">
        {review.course}
      </p>

      <div className="flex gap-1 my-4">

        {[...Array(review.rating)].map((_, index) => (
          <FaStar
            key={index}
            className="text-yellow-500"
          />
        ))}

      </div>

      <p className="text-gray-600">
        {review.review}
      </p>

    </div>
  );
}