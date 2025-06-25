// src/pages/About.jsx
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

const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full transition-colors duration-500 bg-white text-black dark:bg-black dark:text-white">
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
      <div className="w-full md:w-1/2 p-6 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          Hi! I'm someone who's endlessly curious and just a little obsessed with making smart 
          things happen through code. My tech journey began with tinkering and wondering <strong>“What if I built this?”</strong> 
          — and it quickly became a full-blown love for AI, data, and web development.
        </p>
        <p className="mb-4">
           I get excited about building things that not only work well but feel magical to use. 
           Whether it's designing a sleek website or diving into AI models, 
           I'm happiest when I'm solving problems and learning something new.
        </p>
        <p className="mb-4">
          Outside the screen, you'll usually find me with a book in hand — 
          I love stories, especially the ones that make me think or dream a little bigger.
        </p>
        <p>
           I'm always up for new ideas, fun collaborations, and anything that 
           involves turning curiosity into something real and useful. Let's build cool things together!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
