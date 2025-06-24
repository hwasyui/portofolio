// src/pages/HeaderPage.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../css/header.css"; // optional for your custom CSS if needed

const photos = [
  "https://via.placeholder.com/400x300?text=Photo+1",
  "https://via.placeholder.com/400x300?text=Photo+2",
  "https://via.placeholder.com/400x300?text=Photo+3",
  "https://via.placeholder.com/400x300?text=Photo+4",
];

const HeaderPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white">
      {/* Left side: Photo carousel */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          className="w-full max-w-md rounded-2xl shadow-lg"
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right side: About Me */}
      <div className="w-full md:w-1/2 p-6 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          I am a passionate individual driven by curiosity and creativity. My journey
          into tech started from a simple love for problem-solving, and it has grown
          into a full-fledged career pursuit. I enjoy building solutions that are both
          elegant and efficient.
        </p>
        <p className="mb-4">
          When I'm not coding, I spend time learning new concepts in AI, exploring
          cybersecurity, and occasionally indulging in creative outlets like drawing or
          digital storytelling. My belief is that technology should empower people, and
          I aim to be part of innovations that reflect that.
        </p>
        <p className="mb-4">
          Looking forward, I see myself contributing to impactful projects, collaborating
          with diverse teams, and constantly pushing the boundaries of what I can learn
          and create. I'm always open to connecting and exploring new ideas.
        </p>
      </div>
    </div>
  );
};

export default HeaderPage;
