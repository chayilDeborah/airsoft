"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
}

const LatestWork: React.FC<CarouselProps> = ({ images }) => {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(2.5);
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
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + images.length) % images.length);
  };

  return (
    <div className="relative lg:w-[1052px] w-[360px] mx-auto mb-[100px] overflow-hidden ">
      <div className='flex justify-between '>
        <h2 className="text-[16.4px] leading-[21.3px] lg:text-[30px] lg:leading-[39px] font-semibold mb-[40px] "data-aos="zoom-in">Our Latest Works</h2>
        <div>
          <button
            onClick={handlePrev}
            className="text-[22px] lg:text-[30px] mr-[5px] "
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="text-[22px] lg:text-[30px]  "
          >
            →
          </button>
        </div>
      </div>
      <div className="flex space-x-4 overflow-hidden">
        {images.slice(currentIndex, currentIndex + itemsPerPage).map((src, index) => (
          <div key={index} className="flex-none">
            <Image src={src} alt={`Image ${index + 1}`} width={250} height={250} className="object-cover w-[250px] h-[250px] rounded-[30px]" />
          </div>
        ))}
        {currentIndex + itemsPerPage > images.length && images.slice(0, (currentIndex + itemsPerPage) % images.length).map((src, index) => (
          <div key={index + images.length} className="flex-none">
            <Image src={src} alt={`Image ${index + 1}`} width={250} height={250} className="object-cover w-[250px] h-[250px] rounded-[30px] " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestWork;
