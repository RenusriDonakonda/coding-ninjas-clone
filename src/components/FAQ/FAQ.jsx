import faq from "../../data/faq";
import FAQItem from "./FAQItem";

export default function FAQ() {
  return (
    <section className="py-20">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Find answers to the most common questions from learners.
        </p>

        <div className="space-y-5 mt-12">

          {faq.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}