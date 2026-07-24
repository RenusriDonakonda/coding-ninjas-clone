import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

import { quickLinks, courses } from "./footerData";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-orange-500">
              Coding Ninjas
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Learn programming from industry experts through
              hands-on projects and structured courses.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((item) => (

                <li key={item.id}>

                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-orange-500"
                  >
                    {item.title}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Courses */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Popular Courses
            </h3>

            <ul className="space-y-3">

              {courses.map((course, index) => (

                <li
                  key={index}
                  className="text-gray-400"
                >
                  {course}
                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <p className="text-gray-400">
              Hyderabad, Telangana
            </p>

            <p className="text-gray-400 mt-3">
              hello@example.com
            </p>

            <p className="text-gray-400 mt-3">
              +91 9876543210
            </p>

            <div className="flex gap-4 mt-6 text-2xl">

              <a href="#">
                <FaFacebook />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

              <a href="#">
                <FaYoutube />
              </a>

              <a href="#">
                <FaGithub />
              </a>

            </div>

          </div>

        </div>

        <hr className="border-gray-700 my-10" />

        <div className="text-center pb-8 text-gray-500">

          © 2026 Coding Ninjas Clone. Built with React & Tailwind CSS.

        </div>

      </div>

    </footer>
  );
}