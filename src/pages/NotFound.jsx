import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="h-screen flex flex-col justify-center items-center">

      <h1 className="text-8xl font-bold text-orange-500">
        404
      </h1>

      <p className="text-xl mt-5">
        Page Not Found
      </p>

      <Link
        to="/"
        className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-lg"
      >
        Go Home
      </Link>

    </section>
  );
}