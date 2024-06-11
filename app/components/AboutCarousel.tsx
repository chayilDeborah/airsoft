"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  position: string;
  image: string;
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
        setItemsPerPage(4);
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
      <div className="flex justify-between lg:w-[1150px] mx-auto mb-4">
        <div className='text-white ml-auto'>
          <button
            onClick={handlePrev}
            className="lg:text-[30px] mr-2  "
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="lg:text-[30px]"
          >
            →
          </button>
        </div>
      </div>
      <div className="flex lg:ml-[80px] w-full gap-[15px] lg:gap-[50px] text-white  ">
      {testimonials.slice(currentIndex, currentIndex + itemsPerPage).map((testimonial, index) => (
          <div key={index} className="border-[0.9px] lg:border-[3px] border-white lg:h-[300px] lg:rounded-[30px] py-[17px] lg:py-[56px] px-[13px] lg:px-[46px] w-[196px] h-[196px] rounded-[15.2px] lg:w-[599px]">
            <div className="flex items-center lg:mb-4">
              <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="rounded-full lg:w-[80px] h-[24px] lg:h-[80px] w-[24px] " />
              <div className="ml-[9px] lg:ml-4">
                <h3 className="text-[12px] leading-[15px] lg:text-[25px] lg:leading-[32.5px] font-medium  ">{testimonial.name}</h3>
                <p className="text-[12px] leading-[15px] lg:text-[20px] lg:leading-[26px] mt-[5px] mb-[9px] lg:mb-[34.5px]">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-[10px] leading-[13px] lg:text-sm lg:pb-[0px] pb-[11px] ">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
    </main>
  );
};

export default TestimonialCarousel;
