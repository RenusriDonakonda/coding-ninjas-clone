import { useState } from "react";

import courses from "../data/courses";

import CourseCard from "../components/CourseCard/CourseCard";
import CourseFilter from "../components/CourseFilter/CourseFilter";

export default function Courses() {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All"
      ? courses
      : courses.filter(
          (course) => course.category === selected
        );

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center">
          Explore Courses
        </h1>

        <p className="text-center text-gray-500 mt-4">
          Learn the latest technologies from experienced mentors.
        </p>

        <div className="mt-12">

          <CourseFilter
            selected={selected}
            setSelected={setSelected}
          />

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((course) => (
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