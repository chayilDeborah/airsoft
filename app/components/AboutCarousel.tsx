"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  position: string;
  testimonial: string;
}

interface CarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<CarouselProps> = ({ testimonials }) => {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1.8);
      }
    };

    window.addEventListener('resize', updateItemsPerPage);
    updateItemsPerPage(); // Call once to set the initial value

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + testimonials.length) % testimonials.length);
  };

  return (
    <main className='flex justify-center'>
    <div className="relative lg:max-w-[1450px] w-full mx-auto lg:mt-[90px] overflow-hidden text-black ">
      <div className="flex justify-between lg:w-[1110px] mx-auto mb-4">
        <div className=' ml-auto'>
          <button
            onClick={handlePrev}
            className="lg:text-[28px] mr-2 text-[#949494CC] "
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="lg:text-[28px] text-[#f5f5f5]"
          >
            →
          </button>
        </div>
      </div>
      <div className="flex lg:ml-[124px] w-full gap-[15px] lg:gap-[50px] text-white  ">
      {testimonials.slice(currentIndex, currentIndex + itemsPerPage).map((testimonial, index) => (
          <div key={index} className="border-[0.9px] lg:border-[2.88px] border-white lg:h-[304px] lg:rounded-[30px] py-[17px] lg:pt-[40px] px-[13px] lg:px-[44px] w-[196px] h-[196px] rounded-[15.2px] lg:w-[577px]">
            <div className="flex items-center">
              <div className="ml-[9px]">
                <h3 className="text-[12px] leading-[15px] lg:text-[24px] lg:leading-[31.17px] font-medium  ">{testimonial.name}</h3>
                <p className="text-[12px] leading-[15px] lg:text-[20px] lg:leading-[26px] mt-[5px] mb-[9px] lg:mb-[28.7px] text-[#A4A4A4] ">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-[10px] leading-[13px] lg:text-[19.18px] lg:leading-[24.9px] lg:pb-[0px] pb-[11px] ">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
    </main>
  );
};

export default TestimonialCarousel;
