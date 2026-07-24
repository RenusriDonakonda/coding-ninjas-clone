import { useState } from "react";
import courses from "../../data/courses";
import CourseCard from "../CourseCard/CourseCard";

const categories = [
  "All",
  "Web Development",
  "DSA",
  "Data Science",
  "Java",
  "Python",
  "React",
];

export default function PopularCourses() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter(
          (course) => course.category === selectedCategory
        );

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Our Programs
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Popular Courses
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Learn the most in-demand skills from industry experts with
            hands-on projects and placement support.
          </p>

        </div>

        {/* Filter Buttons */}

        <div className="flex flex-wrap justify-center gap-4 mt-12">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition ${
                selectedCategory === category
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-orange-100"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Course Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {filteredCourses.map((course) => (

            <CourseCard
              key={course.id}
              course={course}
            />

          ))}

        </div>

      </div>

    </section>
  );
}