import React from 'react';
import Carousel from '../components/Carousel';

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

const HomePage: React.FC = () => {
  return (
    <div className="">
      <Carousel images={images} itemsPerPage={8} />
    </div>
  );
};

export default HomePage;
