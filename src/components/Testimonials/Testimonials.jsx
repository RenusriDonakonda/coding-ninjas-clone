import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import testimonials from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Student Testimonials
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Hear what our learners have to say.
        </p>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mt-14"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}