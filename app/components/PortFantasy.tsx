import React from 'react';
import AllCarousel from './AllCarousel';

const images = [
  '/reddie.png', 
  '/kima.png',
  '/kiyu.jpg',
  '/kita.jpg',
  '/iron.jpg',
  '/heist.jpg',
  '/orange.jpg',
  '/gang.png',
  '/purple.jpg',
  '/shield.jpg',
  '/cage.jpg',
  '/fatty.jpg',
  '/bigpurp.jpg',
  '/maku.jpg',
  '/shrek.png',
  '/supman.png',
  '/teeth.jpg',
  '/thanos.jpg',
  '/wings.png',
  '/black.jpg',
  '/fire.png',
];

const PortFantasy: React.FC = () => {
  return (
    <div  className="overfow-hidden" data-aos="fade-up">
      <AllCarousel images={images} itemsPerPage={8} />
    </div>
  );
};

export default PortFantasy;
