import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="courses" element={<Courses />} />

        <Route path="reviews" element={<Reviews />} />

        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}