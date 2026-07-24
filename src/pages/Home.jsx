import Hero from "../components/Hero/Hero";
import Companies from "../components/Companies/Companies";
import PopularCourses from "../components/PopularCourses/PopularCourses";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Statistics from "../components/Statistics/Statistics";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <PopularCourses />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <FAQ />
    </>
  );
}