import { useState } from "react";
import courses from "../data/courses";
import { FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    e.target.reset();
  };

  return (
    <section className="bg-gray-50 py-20 min-h-screen">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="text-orange-500 uppercase font-semibold tracking-widest">
              Admission Open
            </span>

            <h1 className="text-5xl font-bold mt-4 leading-tight">
              Start Your Tech Career Today
            </h1>

            <p className="text-gray-600 mt-6 leading-8">
              Fill out the form and our academic counselor will contact you
              shortly to help you choose the right career path.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Industry Expert Mentors</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Hands-on Projects</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Placement Assistance</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Certificate After Completion</span>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-white rounded-2xl shadow-xl p-10">

            <h2 className="text-3xl font-bold">
              Enroll Now
            </h2>

            <p className="text-gray-500 mt-2">
              We'll get back to you within 24 hours.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 mt-8"
            >

              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />

              <select
                required
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              >
                <option value="">
                  Select Course
                </option>

                {courses.map((course) => (
                  <option
                    key={course.id}
                    value={course.title}
                  >
                    {course.title}
                  </option>
                ))}

              </select>

              <textarea
                rows="4"
                placeholder="Tell us about your learning goals..."
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 rounded-xl hover:bg-orange-600 transition font-semibold"
              >
                Submit Application
              </button>

            </form>

            {submitted && (

              <div className="mt-6 bg-green-100 text-green-700 p-4 rounded-xl flex items-center gap-3">

                <FaCheckCircle />

                <span>
                  Thank you! Our counselor will contact you soon.
                </span>

              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}