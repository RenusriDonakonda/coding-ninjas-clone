export default function CourseFilter({
  selected,
  setSelected,
}) {
  const categories = [
    "All",
    "Web",
    "DSA",
    "Java",
    "Python",
    "React",
    "Data Science",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`px-5 py-2 rounded-full border transition ${
            selected === category
              ? "bg-orange-500 text-white"
              : "bg-white hover:bg-orange-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}