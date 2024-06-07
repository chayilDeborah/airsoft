import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import birds from '../assets/birds.png'
import superwoman from '../assets/superwoman.png'
import kingdom from '../assets/kingdom.svg'
import arrow from '../assets/arrow.png'

const Homepage = () => {
  return (
    <main>
        <Navbar />
        <section className='flex justify-center mt-[52px] mb-[60px] '>
            <div>
            <div>
                <h3 className='text-[25px] leading-[32.5px] text-[#9D9393] font-medium '>Airsoft Studio</h3>
                <div className='flex'>
                    <h1 className='text-[96px] leading-[124.8px] text-[#1B1C1E] w-[811px]  '><i className='font-light text-[#28292c]'>Leading</i> Fantasy Concept Art Studio</h1>
                    <Image src={birds} alt='birds-img' className='w-[158px] h-[100px] mt-auto ml-[61px] ' />
                </div>
            </div>
            <div className='flex justify-between mt-[27px] '>
                <Image src={superwoman} alt='superwoman' className='' />
                <div className='w-[82px] mx-[19px] mt-auto h-[82px] mb-[68px] rounded-[50%] border-[2px] flex justify-center border-[#1B1C1E] '>
                  <Image src={arrow} alt='arrow' className='my-auto mx-auto ' />
                </div>
                <div className='w-[525px] mt-[38px]  '>
                  <i className='text-[25px] leading-[32.5px] text-[#1B1C1E] font-light  '>&#34;Art is how we decorate space; Music is how we decorate time.&#34; - Jean-Michel Basquiat</i>
                  <Image src={kingdom} alt='kingdom' className='' />
                </div>
            </div>
            </div>
        </section>
    </main>
  )
}

export default Homepage