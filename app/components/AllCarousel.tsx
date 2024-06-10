import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
  itemsPerPage: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handlers = useSwipeable({
    onSwipedLeft: () => handlePageChange(currentPage + 1),
    onSwipedRight: () => handlePageChange(currentPage - 1),
  });

  const handlePageChange = (page: number) => {
    if (page > totalPages) page = 1;
    if (page < 1) page = totalPages;
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedImages = images.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div {...handlers} className="carousel-container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] lg:gap-4">
        {selectedImages.map((src, index) => (
          <div key={index} className="image-wrapper">
            <Image src={src} alt={`Image ${index + 1}`} width={250} height={250} className="object-cover w-[180px] lg:w-[250px] h-[180px] lg:h-[250px] rounded-[30px] " />
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2 mt-[44px]">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-dot ${currentPage === index + 1 ? 'active-class' : 'bg-black'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
