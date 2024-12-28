"use client";

import { useFirebase } from "@/app/context/Firebase";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState(null);
  const firebase = useFirebase();

  useEffect(() => {
    firebase
      .getAllTestimonials()
      .then((testimonial) => {
        const sortedTestimonials = testimonial.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort in descending order by date

        setTimeout(() => {
          setTestimonials(sortedTestimonials);
        }, 1000);
      })
      .catch(() => {
        setTestimonials([]); // Set to empty array on error
      });
  }, [firebase]);

  const renderSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4 mb-4">
            <Skeleton circle={true} height={64} width={64} />
            <div>
              <Skeleton width={100} height={20} />
              <Skeleton width={150} height={15} />
            </div>
          </div>
          <Skeleton count={3} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Customers Say
        </h2>
        {testimonials === null ? (
          renderSkeleton()
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 }, // 1 slide on small screens
              768: { slidesPerView: 2 }, // 2 slides on tablets
              1024: { slidesPerView: 3 }, // 3 slides on larger screens
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{testimonial.name}</h3>
                      <div className="flex">
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                          <span key={i} className="text-yellow-500">
                            &#9733;
                          </span>
                        ))}
                        {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                          <span key={i} className="text-gray-300">
                            &#9733;
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.review}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default TestimonialSection;
