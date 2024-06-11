"use client";
import Image from 'next/image'
import React, { useState } from "react";
import logo from '../assets/logo.png'
import Link from 'next/link';
import menuh from '../assets/menuh.svg'
import close from '../assets/close.svg'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className='flex justify-center mt-[20px] lg:mt-[30px] overflow-hidden ' data-aos="fade-up" >
      <section className='lg:w-[80%] w-full flex justify-between '>
        <Link href='/'>
          <Image src={logo} alt='logo' className='w-[89.24px] h-[30px] lg:w-[200px] lg:h-[69.8px] mt-[20px] lg:mt-[0px] ' />
        </Link>
        <div className="lg:hidden w-[6%] ">
          <button
            onClick={toggleMenu}
            className="lg:mt-[0px] mt-[20px] lg:mr-[0px] "
          >
            <div className="-ml-[18px] mt-[16px] ">
              {isMenuOpen ? (
                  <Image
                    src={close}
                    alt="close"
                    className="w-[24px] -mr-[35px] fixed z-500 close"
                  />
              ) : (
                <Image
                  src={menuh}
                  alt="close"
                  className=" w-[50px] h-[25px] -mt-[20px] "
                />
              )}
            </div>
          </button>
        </div>
        <section
          className={`${isMenuOpen
            ? "block inset-0 fixed z-50 pb-[50px] pt-[40px] pl-[25px] lg:p-[0px] bg-black text-white bg-opacity-500 w-[100%] mx-auto"
            : "hidden"
            } lg:hidden justify-between text-[22px] leading-[150%] lg:w-[539px] my-auto `}
        >
           <h1 className='text-[#A4A4A4] text-[15px] leading-[19.5px] font-medium z-500 close mt-[33px] '>Menu</h1>
          <Link href="/about">
            <h1 className=" lg:my-auto hover:text-[#150DAD] mt-[105px] ">
            About us
            </h1>
          </Link>
          <Link href="/portfolio">
            <h1 className="my-[20px] lg:my-auto hover:text-[#150DAD] ">
            Projects
            </h1>
          </Link>
          <Link href="/#contact">
            <h1 className="lg:my-auto hover:text-[#150DAD]">
            Contact us
            </h1>
          </Link>
          <Link href="/portfolio">
            <h1 className="my-[20px] lg:my-auto hover:text-[#150DAD]">
            Art Gallery
            </h1>
          </Link>
          <Link href='/payment'>
          <button className=' text-[17.14px] leading-[22px] rounded-[19.5px] border-[1.32px] border-white w-[103px] h-[40px] hover:bg-white hover:text-black  '>Quote</button>
          </Link>
          <h1 className='text-[#A4A4A4] text-[15px] leading-[19.5px] mt-[24px] '>Let&#39;s chat</h1>
          <h1 className='text-[20px] leading-[26px] mt-[20px] text-[#F5F5F5] hover:text-[#150DAD]'>Sam@airsoftstudios.com </h1>
        </section>
<Link href='/payment' className='hidden lg:block'>
        <button className='hidden lg:block text-[20.79px] leading-[27px] text-[#1B1C1E] rounded-[34.64px] border-[2.08px] border-[#1B1C1E] w-[180px] h-[69.8px] hover:bg-black hover:text-white '>Get Quote</button>
        </Link>
      </section>
    </main>
  )
}

export default Navbar