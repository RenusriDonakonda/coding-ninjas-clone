export default function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300">

      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">

        <Icon className="text-3xl text-orange-500" />

      </div>

      <h3 className="text-2xl font-semibold mt-6">
        {feature.title}
      </h3>

      <p className="text-gray-600 mt-4 leading-7">
        {feature.description}
      </p>

    </div>
  );
}