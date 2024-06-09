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
  '/kima.PNG',
  '/kiyu.JPG',
  '/kita.JPG',
  '/iron.JPG',
  '/heist.JPG',
  '/orange.JPG',
  '/gang.png',
  '/fallen.jpg', 
  '/bluesky.jpg',
  '/purple.JPG',
  '/shrimp.jpg',
  '/swap.jpg',
  '/titanic.jpg',
  '/city.jpg',
  '/redsky.png',
  '/oldhouse.jpg',
  '/nyc.jpg',
  '/shield.JPG',
  '/cage.JPG',
  '/fatty.JPG',
  '/bigpurp.JPG',
  '/maku.JPG',
  '/shrek.png',
  '/supman.png',
  '/teeth.JPG',
  '/thanos.JPG',
  '/wings.PNG',
  '/black.JPG',
  '/fire.PNG',
];

const PortAllArt: React.FC = () => {
  return (
    <div className="">
      <AllCarousel images={images} itemsPerPage={8} />
    </div>
  );
};

export default PortAllArt;
