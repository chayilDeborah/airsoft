import React from 'react';
import AllCarousel from './AllCarousel';

const images = [
  '/fallen.jpg', 
  '/bluesky.jpg',
  '/ancient.png',
  '/plane.png',
  '/shrimp.jpg',
  '/swap.jpg',
  '/titanic.jpg',
  '/city.jpg',
  '/redsky.png',
  '/bluey.png',
  '/boat.png',
  '/oldhouse.jpg',
  '/nyc.jpg',
];

const PortLandscape: React.FC = () => {
  return (
    <div className="">
      <AllCarousel images={images} itemsPerPage={8} />
    </div>
  );
};

export default PortLandscape;
