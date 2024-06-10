import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import birds from '../assets/birds.png'
import superwoman from '../assets/superwoman.png'
import kingdom from '../assets/kingdom.svg'
import arrow from '../assets/arrow.png'
import PortfolioComponent from './PortfolioComponent'
import ContactComponent from './ContactComponent'
import Footer from './Footer'

const Homepage = () => {
  return (
    <main className=''>
    <main  className='lg:max-w-[1450px] w-[93%] mx-auto lg:w-full'>
        <Navbar />
        <section className='flex justify-center mt-[52px] mb-[60px] '>
            <div>
            <div>
                <h3 className='lg:text-[25px] lg:leading-[32.5px] text-[8.5px] leading-[11px] text-[#9D9393] font-medium '>Airsoft Studio</h3>
                <div className='flex'>
                    <h1 className='lg:text-[96px] lg:leading-[124.8px] text-[31.6px] leading-[42.4px] text-[#1B1C1E] lg:w-[811px] w-[287px] '><i className='font-light text-[#28292c]'>Leading</i> Fantasy Concept Art Studio</h1>
                    <Image src={birds} alt='birds-img' className='lg:w-[158px] lg:h-[100px] w-[54px] h-[34px] mt-auto ml-[20px] lg:ml-[61px] ' />
                </div>
            </div>
            <div className='lg:flex justify-between mt-[15px] lg:mt-[27px] '>
                <Image src={superwoman} alt='superwoman' className='lg:w-[511px] lg:h-[304px] w-full mx-auto lg:mx-[0px] ' />
                <div className=' lg:w-[82px] lg:h-[82px] w-[25px] h-[25px] lg:mx-[19px] mt-[25px] lg:mt-auto lg:mb-[68px] -mb-[25px] rounded-[50%] border-[0.6px] lg:border-[2px] flex justify-center border-[#1B1C1E] '>
                  <Image src={arrow} alt='arrow' className='my-auto mx-auto lg:w-[25px] w-[7px] ' />
                </div>
                <div className='lg:w-[525px] lg:mt-[38px] flex lg:block '>
                  <i className='lg:text-[25px] lg:leading-[32.5px] text-[10px] leading-[13px] text-[#1B1C1E] font-light lg:w-[519px] w-[180px] lg:mt-[0px] mt-[30px]  '>&#34;Art is how we decorate space; Music is how we decorate time.&#34; - Jean-Michel Basquiat</i>
                  <Image src={kingdom} alt='kingdom' className='lg:w-[511px] lg:h-[200px] w-[200px] h-[69px] ' />
                </div>
            </div>
            </div>
        </section>
       
    </main>
     <PortfolioComponent />
     <ContactComponent />
     <Footer />
     </main>
  )
}

export default Homepage