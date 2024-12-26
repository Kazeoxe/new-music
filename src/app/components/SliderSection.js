"use client";
import React, { useState } from "react";
import Image from "next/image";

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const slides = [
    {
      id: 1,
      title: "新しいアルバム",
      content:
        "This is the first actuality of the group Quisque magna sem, sagittis at ultricies in, rutrummauris. Nullam non vulputate purus. Phasellus facilisis ultrices mi, at molestie est egestas in.",
      bgColor: "bg-neutral-100",
      number: "01",
    },
    {
      id: 2,
      title: "クリーピーナッツ",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
      bgColor: "bg-neutral-200",
      number: "02",
    },
    {
      id: 3,
      title: "ライブツアー2025",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
      bgColor: "bg-neutral-300",
      number: "03",
    },
  ];

  return (
    <div
      className="flex transition-transform duration-500 ease-in-out w-[300%]"
      style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="grid grid-cols-1 md:grid-cols-5 min-h-[540px] w-screen"
        >
          <div
            className={`md:col-start-4 md:col-end-6 ${slide.bgColor} text-neutral-900 text-xs flex flex-col justify-between p-6 md:p-8`}
          >
            <div>
              <h2 className="text-xl md:text-[2.125rem] max-w-[9ch] leading-normal md:leading-[2rem] mb-6 md:mb-12">
                {slide.title}
              </h2>
              <p className="max-w-[16.25rem] opacity-40">{slide.content}</p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <span>[{slide.number}]</span>
              <span>Actuality n°{slide.number}</span>
              <div className="space-x-4">
                <button
                  onClick={handlePrevious}
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Previous slide"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Next slide"
                >
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="md:row-start-1 md:col-start-1 md:col-end-4 relative h-80 md:h-full">
            <Image
              className="object-cover"
              src={`/CreepyNuts/creepynuts_0${index + 1}.jpg`}
              alt={`Slide ${index + 1}`}
              layout="fill"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderSection;
