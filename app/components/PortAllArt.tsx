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
  '/reddie.png', 
  '/kima.png',
  '/kiyu.jpg',
  '/kita.jpg',
  '/iron.jpg',
  '/heist.jpg',
  '/orange.jpg',
  '/gang.png',
  '/fallen.jpg', 
  '/bluesky.jpg',
  '/purple.jpg',
  '/shrimp.jpg',
  '/swap.jpg',
  '/titanic.jpg',
  '/city.jpg',
  '/redsky.png',
  '/oldhouse.jpg',
  '/nyc.jpg',
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

const PortAllArt: React.FC = () => {
  return (
    <div className="overfow-hidden" data-aos="fade-up" data-duration="1400" >
      <AllCarousel images={images} itemsPerPage={8} />
    </div>
  );
};

export default PortAllArt;
