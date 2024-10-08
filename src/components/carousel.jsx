import React, { useState } from 'react';
import Pi1 from '../assets/pi1.jpg';
import Pi2 from '../assets/pi2.jpg';
import Pi3 from '../assets/pi3.jpg';
import Pi4 from '../assets/pi4.jpg';
import Pi5 from '../assets/pi5.jpg';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Pi1, Pi2, Pi3, Pi4, Pi5];

  const imagesToShow = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const visibleImages = [];
  for (let i = 0; i < imagesToShow; i++) {
    visibleImages.push(images[(currentIndex + i) % images.length]);
  }

  return (
    <div className="relative w-full max-w-screen-lg mx-auto my-4 px-4 lg:px-8">
      <div className="relative overflow-hidden rounded-lg flex">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-2"
          >
            <div className="w-full h-64 relative">
              <img
                src={img}
                className="w-full h-full object-cover rounded-md"
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-30 flex items-center justify-center p-2 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-red-500 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-30 flex items-center justify-center p-2 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-red-500 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
