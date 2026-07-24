import { useState } from "react";
import courses from "../../data/courses";
import CourseCard from "../CourseCard/CourseCard";
import CourseFilter from "../CourseFilter/CourseFilter";

export default function PopularCourses() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) => {
    const categoryMatch =
      category === "All" || course.category === category;

    const searchMatch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.category.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Popular Courses
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Learn from industry experts and build job-ready skills.
        </p>

        {/* Search Bar */}

        <div className="max-w-lg mx-auto mt-10">

          <input
            type="text"
            placeholder="🔍 Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

        </div>

        <CourseFilter
          category={category}
          setCategory={setCategory}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No matching courses found.
            </p>
          )}

        </div>

      </div>

    </section>
  );
}