import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import birds from '../assets/birds.png'
import superwoman from '../assets/superwoman.png'
import homelogo from '../assets/homelogo.svg'
import logo from '../assets/logo.png'
import PortfolioComponent from './PortfolioComponent'
import ContactComponent from './ContactComponent'
import Footer from './Footer'
import AboutComponent from './AboutComponent'
import Link from 'next/link'
import NavigationMenu from './NavigationMenu'

const Homepage = () => {
  return (
    <main className='overflow-hidden '>
      <main className='lg:max-w-[1450px] w-[93%] mx-auto lg:w-full overflow-hidden '>
        <section className='w-full bg-[#FEFEFE] pt-[15px] lg:pt-[57px]  '>
          <Navbar />
          <div className=' w-full hidden lg:block relative  '>
            <div className=' relative'>
              <div className='image3 mt-[148px] lg:w-full object-cover h-[554px] ml-[130px] '></div>
              <section className='absolute lg:max-w-[1450px] mx-auto w-full mx-auto lg:w-[90%] top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center'>
                <div className='mx-auto text-black w-full flex justify-between '>
                  <NavigationMenu />
                  <div className='-mt-[75px] '>
                    <Image src={homelogo} alt='logo' className='w-[350px] h-[117px] mx-auto ' />
                    <h1 className='text-[35px] mt-[20px] leading-[45.5px] text-black font-semibold mb-[35px] '>Discover the world&#39;s best concept Art </h1>
                    <Link href='/portfolio'>
                    <button className='explore hover:bg-[#140DB0] w-[200px] h-[66px] rounded-[50px] text-[20px] text-white leading-[26px] mx-auto  flex justify-center items-center '>Explore</button>
                    </Link>
                  </div>
                  <div className=''>
                    <Image src={birds} alt='birds' className='' />
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className=' w-full block lg:hidden relative  '>
            <div className=' relative'>
              <div className='image4 h-[450px] object-cover '></div>
              <section className='absolute lg:max-w-[1450px] mx-auto w-full mx-auto lg:w-[90%] top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center'>
              <div className='mx-auto text-black w-full flex justify-center'>
              <div className=' '>
                    <Image src={homelogo} alt='logo' className='w-[150px] h-[50px] mx-auto ' />
                    <h1 className='text-[30px] leading-[39px] text-black text-center font-semibold mb-[10px] mt-[3px] '>Discover the world&#39;s best concept Art </h1>
                    <Link href='/portfolio'>
                    <button className='explore hover:bg-[#140DB0] w-[100px] h-[33px] rounded-[20.9px] text-[10px] text-white leading-[13px] mx-auto  flex justify-center items-center '>Explore</button>
                    </Link>                  </div>

              </div>
              </section>
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