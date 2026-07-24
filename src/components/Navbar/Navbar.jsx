import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaTimes, FaGraduationCap } from "react-icons/fa";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Courses",
    path: "/courses",
  },
  {
    title: "Reviews",
    path: "/reviews",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="bg-orange-500 text-white w-11 h-11 rounded-xl flex items-center justify-center">

              <FaGraduationCap className="text-xl" />

            </div>

            <div>

              <h2 className="text-2xl font-bold text-gray-900">
                Coding Ninjas
              </h2>

              <p className="text-xs text-gray-500">
                Learn • Build • Grow
              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden md:flex items-center gap-10">

            {navLinks.map((item) => (

              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition relative ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`
                }
              >
                {item.title}
              </NavLink>

            ))}

          </nav>

          {/* Desktop Buttons */}

          <div className="hidden md:flex items-center gap-4">

            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl border border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              to="/courses"
              className="px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-orange-500 transition"
            >
              Explore Courses
            </Link>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl"
          >
            {open ? <FaTimes /> : <HiMenuAlt3 />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="md:hidden bg-white border-t">

          <div className="flex flex-col p-6 gap-5">

            {navLinks.map((item) => (

              <NavLink
                key={item.title}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700"
                }
              >
                {item.title}
              </NavLink>

            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-center border border-orange-500 text-orange-500 rounded-lg py-3"
            >
              Login
            </Link>

            <Link
              to="/courses"
              onClick={() => setOpen(false)}
              className="text-center bg-orange-500 text-white rounded-lg py-3"
            >
              Explore Courses
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}