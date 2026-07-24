import courses from "../../data/courses";
import CourseCard from "../CourseCard/CourseCard";

export default function PopularCourses() {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Popular Courses
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Learn from industry experts and build job-ready skills.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">

          {courses.map((course) => (
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