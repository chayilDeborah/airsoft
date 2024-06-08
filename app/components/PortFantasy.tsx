import React from 'react';
import AllCarousel from './AllCarousel';

const images = [
  '/reddie.png', 
  '/kima.PNG',
  '/kiyu.JPG',
  '/kita.JPG',
  '/iron.JPG',
  '/heist.JPG',
  '/orange.JPG',
  '/gang.png',
  '/purple.JPG',
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

const PortFantasy: React.FC = () => {
  return (
    <div className="">
      <AllCarousel images={images} itemsPerPage={8} />
    </div>
  );
};

export default PortFantasy;
