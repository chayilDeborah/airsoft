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
import AboutComponent from './AboutComponent'
import Link from 'next/link'
import NavigationMenu from './NavigationMenu'

const Homepage = () => {
  return (
    <main className=' '>
    <main  className='lg:max-w-[1450px] w-[93%] mx-auto lg:w-full'>
        <Navbar />
        <section className='flex  mt-[52px] mb-[60px] '>
        <NavigationMenu />
            <div>
            <div>
                <h3 className='lg:text-[19.1px] lg:leading-[24.9px] text-[8.5px] leading-[11px] text-[#9D9393] font-medium ' data-aos="fade-up">Airsoft Studio</h3>
                <div className='flex'>
                    <h1 className='lg:text-[78.6px] lg:leading-[102.2px] text-[31.6px] leading-[42.4px] text-[#1B1C1E] lg:w-[811px] w-[287px] '  data-aos="fade-up"><i className='font-light text-[#28292c]' data-aos-offset="10" data-aos="fade-up">Leading</i> Fantasy Concept Art Studio</h1>
                    <Image src={birds} alt='birds-img' className='lg:w-[151px] lg:h-[95.9px] w-[54px] h-[34px] mt-auto ml-[20px] lg:ml-[61px] 'data-aos="zoom-in" />
                </div>
            </div>
            <div className='lg:flex justify-between mt-[15px] lg:mt-[0px] '>
             
                <Image src={superwoman} alt='superwoman' className='lg:w-[490px] lg:h-[287px] w-full mx-auto lg:mx-[0px] lg:mt-[50px] ' data-aos="zoom-out" />
                <Link href='/#footer' className='lg:mt-auto '>
                <div className=' lg:w-[67px] lg:h-[67px] w-[25px] h-[25px] lg:mx-[19px] mt-[25px] lg:mt-auto lg:mb-[68px] -mb-[25px] rounded-[50%] border-[0.6px] lg:border-[2px] flex justify-center border-[#1B1C1E] '>
                  <Image src={arrow} alt='arrow' className='my-auto mx-auto lg:w-[13px] w-[5px] ' />
                </div>
                </Link>
                <div className='lg:w-[525px] lg:mt-[60px] flex lg:block 'data-aos="fade-down">
                  <i className='lg:text-[19px] lg:leading-[24.9px] text-[10px] leading-[13px] text-[#1B1C1E] font-light lg:w-[519px] w-[180px] lg:mb-[0px] mt-[30px]  ' data-aos-offset="20" data-aos="fade-up">&#34;Art is how we decorate space; Music is how we decorate time.&#34; - Jean-Michel Basquiat</i>
                  <Image src={kingdom} alt='kingdom' className='lg:w-[490px] lg:h-[191px] w-[200px] h-[69px] lg:mt-[35px] lg:mt-[0px] ' />
                </div>
            </div>
            </div>
        </section>
       
    </main>
    <AboutComponent />
     <PortfolioComponent />
     <ContactComponent />
     <Footer />
     </main>
  )
}

export default Homepage