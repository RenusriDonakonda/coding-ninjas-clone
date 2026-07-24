import { useState, useMemo } from "react";

import courses from "../data/courses";
import CourseCard from "../components/Courses/CourseCard";
import Loader from "../components/Loader/Loader";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Change to true if you want to test the loader
  const [loading] = useState(false);

  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        category === "All" || course.category === category;

      const matchesSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <section className="bg-gray-50 min-h-screen py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h1 className="text-5xl font-bold">
            Explore Our Courses
          </h1>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Learn the most in-demand technologies with industry-designed
            curriculum, hands-on projects, and career support.
          </p>

        </div>

        {/* Search + Filter */}

        <div className="flex flex-col md:flex-row gap-5 justify-between mt-12">

          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-5 py-3 w-full md:w-1/2 focus:ring-2 focus:ring-orange-500 outline-none"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-xl px-5 py-3 md:w-64 focus:ring-2 focus:ring-orange-500 outline-none"
          >
            {categories.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

        {/* Results */}

        <div className="mt-6">

          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold">
              {filteredCourses.length}
            </span>{" "}
            course{filteredCourses.length !== 1 && "s"}
          </p>

        </div>

        {/* Course Grid */}

        <div className="mt-10">

          {loading ? (
            <Loader />
          ) : filteredCourses.length > 0 ? (

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              ))}

            </div>

          ) : (

            <div className="bg-white rounded-2xl shadow-md py-20 text-center">

              <h2 className="text-3xl font-bold">
                No Courses Found
              </h2>

              <p className="text-gray-500 mt-4">
                Try searching with a different keyword or category.
              </p>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}