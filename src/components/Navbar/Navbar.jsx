import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold text-orange-500"
          >
            Coding Ninjas
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700 hover:text-orange-500 transition"
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white transition">
              Login
            </button>

            <button className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
              Explore Courses
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col gap-5 p-6">

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

            <button className="border border-orange-500 text-orange-500 py-2 rounded-lg">
              Login
            </button>

            <button className="bg-orange-500 text-white py-2 rounded-lg">
              Explore Courses
            </button>

          </div>
        </div>
      )}
    </header>
  );
}