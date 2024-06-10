"use client"
import React, { useState } from 'react'
import PorfolioNav from '../components/PorfolioNav'
import PortAllArt from '../components/PortAllArt';
import PortFantasy from '../components/PortFantasy';
import PortLandscape from '../components/PortLandscape';
import Footer from '../components/Footer';

const Portfolio = () => {

  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'all':
        return <PortAllArt />;
      case 'fantasy':
        return <PortFantasy />;
      case 'landscape':
        return <PortLandscape />;
      default:
        return null;
    }
  }
  return (
    <main className='flex justify-center bg-[#000000] text-white '>
      <div className='w-full'>
        <section className='lg:w-full w-[93%] lg:max-w-[1450px] mx-auto mt-[50px] '>
          <PorfolioNav />
          <div className='mt-[79px] '>
            <div className='w-[80%] mx-auto '>
              <div className='w-[887px] mb-[45px] '>
                <h3 className='text-[25px] leading-[32.5px] text-[#9D9393] font-medium '>Portfolio</h3>
                <h1 className='text-[96px] leading-[124.8px] text-[#FFFFFF]  '><i className='font-light text-[#FFFFFF]'>Fantasy</i>  Concept Art Projects</h1>
              </div>
              <div className='flex justify-evenly w-[735px] mb-[52px] mt-[45px] text-white'>
                <div className='w-[110px] h-[70px] text-[20.8px] leading-[27px] rounded-[34.6px] border-[2.08px] border-white flex justify-center items-center  ' onClick={() => handleTabClick('all')} style={{ backgroundColor: activeTab === 'all' ? '#F9F9F9' : '', color: activeTab === 'all' ? 'black' : '' }}>All</div>
                <div className='w-[287.7px] h-[70px] text-[20.8px] leading-[27px] rounded-[34.6px] border-[2.08px] border-white flex justify-center items-center  ' onClick={() => handleTabClick('fantasy')} style={{ backgroundColor: activeTab === 'fantasy' ? '#F9F9F9' : '', color: activeTab === 'fantasy' ? 'black' : '' }}>Fantasy Character Art</div>
                <div className='w-[296.7px] h-[70px] text-[20.8px] leading-[27px] rounded-[34.6px] border-[2.08px] border-white flex justify-center items-center  ' onClick={() => handleTabClick('landscape')} style={{ backgroundColor: activeTab === 'landscape' ? '#F9F9F9' : '', color: activeTab === 'landscape' ? 'black' : '' }}>Fantasy Landscape Art</div>
              </div>
              {renderTabContent()}
            </div>
          </div>
        </section>
        <hr className='mt-[58px] text-[#F5F5F5] bg-[#F5F5F5] '/>
        {/* <Footer /> */}
      </div>
    </main>
  )
}

export default Portfolio