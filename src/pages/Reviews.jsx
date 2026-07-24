import reviews from "../data/reviews";
import ReviewCard from "../components/Reviews/ReviewCard";

export default function Reviews() {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center">
          Student Reviews
        </h1>

        <p className="text-center text-gray-500 mt-4">
          Read what our students say.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}

        </div>

      </div>

    </section>
  );
}