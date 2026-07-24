import companies from "./companiesData";

export default function Companies() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Trusted by Learners Working At
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Our students are placed in top product companies.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16">

          {companies.map((company) => (

            <div
              key={company.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 flex items-center justify-center h-32"
            >

              <img
                src={company.logo}
                alt={company.name}
                className="w-28 object-contain"
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}