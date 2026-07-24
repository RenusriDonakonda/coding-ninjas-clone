import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-orange-500">
              Coding Ninjas
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Learn the most in-demand programming skills from industry
              experts and build a successful software development career.
            </p>

            <div className="flex gap-4 mt-6 text-2xl">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-500 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-500 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-500 transition"
              >
                <FaYoutube />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-500 transition"
              >
                <FaGithub />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link to="/" className="hover:text-orange-500">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/courses" className="hover:text-orange-500">
                  Courses
                </Link>
              </li>

              <li>
                <Link to="/reviews" className="hover:text-orange-500">
                  Reviews
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-orange-500">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Popular Courses */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Popular Courses
            </h3>

            <ul className="space-y-3">

              <li>Full Stack Development</li>

              <li>Data Structures & Algorithms</li>

              <li>React Development</li>

              <li>Python Programming</li>

              <li>Data Science</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">

              <p>
                📧 support@codingninjas.com
              </p>

              <p>
                📞 +91 98765 43210
              </p>

              <p>
                📍 Bengaluru, Karnataka, India
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">

          © {new Date().getFullYear()} Coding Ninjas Clone • Built with React &
          Tailwind CSS by Renusri Donakonda.

        </div>

      </div>

    </footer>
  );
}