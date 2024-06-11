"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import whitearoow from '../assets/whitearoow.svg'
import AllArt from './AllArt'
import FantasyArt from './FantasyArt'
import Landscape from './Landscape'
import Link from 'next/link'
import NavigationMenu from './NavigationMenu'


const PortfolioComponent = () => {

    const [activeTab, setActiveTab] = useState('all');

    const handleTabClick = (tab: any) => {
      setActiveTab(tab);
    };

    const renderTabContent = () => {
        switch (activeTab) {
          case 'all':
            return <AllArt />;
          case 'fantasy':
            return <FantasyArt />;
          case 'landscape':
            return <Landscape />;
          default:
            return null;
        }
      }
    
    return (
        <main className='bg-[#000000] w-full border-[0.1px] border-black mb-[40px] lg:mb-[80px] pb-[80px] text-white overflow-hidden '>
            <section className='  w-[93%] lg:w-full mx-auto '>
                <div className='mt-[22.5px] lg:mt-[80px]'>
                    <div className='flex justify-center '>
                        <div>
                          {/* <NavigationMenu /> */}
                            <h3 className='lg:text-[25px] text-[10px] leading-[13.92px] lg:leading-[32.5px] text-[#9D9393] font-medium w-fit 'data-aos="zoom-in">Portfolio</h3>
                            <div className='flex'>
                                <h1 className='text-[38.13px] lg:text-[96px] leading-[53.5px] lg:leading-[124.8px] text-[#FFFFFF] lg:w-[811px] w-[287px] ' data-aos="zoom-in"><i className='font-light text-[#FFFFFF]'data-aos="zoom-in">Fantasy</i>  Concept Art Studio</h1>
                                <Link href='/portfolio'>
                                <div className='lg:w-[82px] lg:h-[82px] w-[25px] h-[25px] mx-[19px] mt-auto lg:mb-[68px] rounded-[50%] border-[0.6px] lg:border-[2px] flex justify-center border-[#FFFFFF] hover:bg-[#150dad] hover:border-[#150dad] '>
                                    <Image src={whitearoow} alt='birds-img' className='my-auto mx-auto lg:w-[25px] w-[7px] hover:text-black ' />
                                </div>
                                </Link>
                            </div>
                            <div className='flex justify-evenly lg:w-[735px] my-[20px] lg:mb-[52px] lg:mt-[45px] text-white'>
                              <div className='w-[53.3px] lg:w-[110px] h-[36.1px] lg:h-[70px] text-[11px] lg:text-[20.8px] leading-[14px] lg:leading-[27px] rounded-[18px] lg:rounded-[34.6px] border-[1px] lg:border-[2.08px] border-white flex justify-center items-center  'data-aos="zoom-out" data-duration="1400"  onClick={() => handleTabClick('all')} style={{backgroundColor: activeTab === 'all' ? '#F9F9F9' : '', color: activeTab=== 'all'? 'black': ''}}>All</div>
                              <div className='w-[142px] lg:w-[287.7px] h-[36px] lg:h-[70px] text-[11px] lg:text-[20.8px] leading-[14px] lg:leading-[27px] rounded-[18px] lg:rounded-[34.6px] border-[1px] lg:border-[2.08px] border-white flex justify-center items-center mx-[5px] lg:mx-[0px]  'data-aos="zoom-out" data-duration="1500"  onClick={() => handleTabClick('fantasy')} style={{backgroundColor: activeTab === 'fantasy' ? '#F9F9F9' : '', color: activeTab=== 'fantasy'? 'black': ''}}>Fantasy Character Art</div>
                              <div className='w-[146px] lg:w-[296.7px] h-[36px] lg:h-[70px] text-[11px] lg:text-[20.8px] leading-[14px] lg:leading-[27px] rounded-[18px] lg:rounded-[34.6px] border-[1px] lg:border-[2.08px] border-white flex justify-center items-center  'data-aos="zoom-out" data-duration="1600"  onClick={() => handleTabClick('landscape')} style={{backgroundColor: activeTab === 'landscape' ? '#F9F9F9' : '', color: activeTab=== 'landscape'? 'black': ''}}>Fantasy Landscape Art</div>
                            </div>
                            {renderTabContent()}
                        </div>

                    </div>

                </div>

            </section>

        </main>
    )
}

export default PortfolioComponent