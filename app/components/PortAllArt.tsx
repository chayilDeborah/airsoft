import React from 'react';
import AllCarousel from './AllCarousel';

const images = [
  '/sup.png', 
  '/ancient.png',
  '/yoki.png',
  '/oldie.png',
  '/bluey.png',
  '/plane.png',
  '/boat.png',
  '/gang.png',
  '/sup.png',
  '/sup.png',
  '/sup.png',
  '/sup.png',
  '/sup.png',
  '/sup.png',
  '/sup.png',
  '/sup.png',
  '/sup.png',
  '/sup.png',
  '/sup.png',
  '/sup.png',
  '/sup.png',
  '/sup.png',
  '/sup.png',
  '/sup.png',
  '/sup.png',
];

const PortAllArt: React.FC = () => {
  return (
    <div className="">
      <AllCarousel images={images} itemsPerPage={8} />
    </div>
  );
};

export default PortAllArt;
