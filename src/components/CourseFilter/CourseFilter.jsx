const categories = [
  "All",
  "Web Development",
  "DSA",
  "Data Science",
  "Java",
  "Python",
  "React",
];

export default function CourseFilter({
  category,
  setCategory,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">

      {categories.map((item) => (

        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`px-5 py-2 rounded-full transition ${
            category === item
              ? "bg-orange-500 text-white"
              : "bg-gray-100 hover:bg-orange-100"
          }`}
        >
          {item}
        </button>

      ))}

    </div>
  );
}