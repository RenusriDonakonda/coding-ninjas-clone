import features from "../../data/features";
import FeatureCard from "./FeatureCard";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Why Choose Us
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Everything you need to become a job-ready software developer.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
}