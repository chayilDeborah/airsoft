"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import whitearoow from '../assets/whitearoow.svg'
import AllArt from './AllArt'
import FantasyArt from './FantasyArt'
import Landscape from './Landscape'
import Link from 'next/link'


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
        <main className='bg-[#000000] w-full border-[0.5px] border-[#9D9393] mt-[52px] mb-[80px] pb-[80px] text-white '>
            <section className=' w-full mx-auto lg:w-full'>
                <div className='mt-[80px]'>
                    <div className='flex justify-center '>
                        <div>
                            <h3 className='text-[25px] leading-[32.5px] text-[#9D9393] font-medium '>Portfolio</h3>
                            <div className='flex'>
                                <h1 className='text-[96px] leading-[124.8px] text-[#FFFFFF] w-[811px]  '><i className='font-light text-[#FFFFFF]'>Fantasy</i>  Concept Art Studio</h1>
                                <Link href='/portfolio'>
                                <div className='w-[82px] mx-[19px] mt-auto h-[82px] mb-[68px] rounded-[50%] border-[2px] flex justify-center border-[#FFFFFF] '>
                                    <Image src={whitearoow} alt='birds-img' className='my-auto mx-auto ' />
                                </div>
                                </Link>
                            </div>
                            <div className='flex justify-evenly w-[735px] mb-[52px] mt-[45px] text-white'>
                              <div className='w-[110px] h-[70px] text-[20.8px] leading-[27px] rounded-[34.6px] border-[2.08px] border-white flex justify-center items-center  ' onClick={() => handleTabClick('all')} style={{backgroundColor: activeTab === 'all' ? '#F9F9F9' : '', color: activeTab=== 'all'? 'black': ''}}>All</div>
                              <div className='w-[287.7px] h-[70px] text-[20.8px] leading-[27px] rounded-[34.6px] border-[2.08px] border-white flex justify-center items-center  ' onClick={() => handleTabClick('fantasy')} style={{backgroundColor: activeTab === 'fantasy' ? '#F9F9F9' : '', color: activeTab=== 'fantasy'? 'black': ''}}>Fantasy Character Art</div>
                              <div className='w-[296.7px] h-[70px] text-[20.8px] leading-[27px] rounded-[34.6px] border-[2.08px] border-white flex justify-center items-center  ' onClick={() => handleTabClick('landscape')} style={{backgroundColor: activeTab === 'landscape' ? '#F9F9F9' : '', color: activeTab=== 'landscape'? 'black': ''}}>Fantasy Landscape Art</div>
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