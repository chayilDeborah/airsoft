"use client";
import Image from 'next/image'
import React, { useState } from "react";
import whitelogo from '../assets/whitelogo.png'
import Link from 'next/link';
import whitemenu from '../assets/whitemenu.svg'
import close from '../assets/close.svg'

const PortfolioNav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className='flex justify-center mt-[20px] lg:mt-[30px] overflow-hidden '>
      <section className='lg:w-[80%] w-full flex justify-between '>
        <Link href='/'>
          <Image src={whitelogo} alt='logo' className='w-[89.24px] h-[30px] lg:w-[156px] lg:h-[59.8px] mt-[20px] lg:mt-[0px] ' />
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
                  src={whitemenu}
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
           {/* <h1 className='text-[#A4A4A4] text-[15px] leading-[19.5px] font-medium z-500 close mt-[33px] '>Menu</h1> */}
          <Link href="/">
            <h1 className=" lg:my-auto hover:text-[#00B700] mt-[25px] ">
            About us
            </h1>
          </Link>
          <Link href="/#about">
            <h1 className="my-[20px] lg:my-auto hover:text-[#00B700] ">
            Projects
            </h1>
          </Link>
          <Link href="/#tokenomics">
            <h1 className="lg:my-auto hover:text-[#00B700]">
            Contact us
            </h1>
          </Link>
          <Link href="/#how">
            <h1 className="my-[20px] lg:my-auto hover:text-[#00B700]">
            Art Gallery
            </h1>
          </Link>
          <Link href='/payment'>
          <button className=' text-[17.14px] leading-[22px] rounded-[19.5px] border-[1.32px] border-white w-[103px] h-[40px] '>Quote</button>
          </Link>
          <h1 className='text-[#A4A4A4] text-[15px] leading-[19.5px] mt-[24px] '>Let&#39;s chat</h1>
          <h1 className='text-[20px] leading-[26px] mt-[20px] text-[#F5F5F5]'>Sam@airsoftstudios.com </h1>
        </section>
        <Link href='/payment' className='hidden lg:block'>
        <button className='hidden lg:block text-[19.9px] leading-[25.88px] text-white rounded-[26px] border-[1.56px] border-white w-[155.5px] h-[58.2px]  overflow-hidden relative group '>
        <span className='relative z-10 hover:text-black'>Get Quote</span>
        <div className='absolute inset-0 bg- transition-all duration-500 ease-in-out group-hover:animate-background-flow hover:text-black '></div>
      <style jsx>{`
        button {
          background: linear-gradient(0deg, #ffffff, #ffffff),
                      linear-gradient(black, black);
          background-size: 100% 0, 100% 100%;
          background-repeat: no-repeat;
          transition: background-size 0.5s;
        }

        button:hover {
          background-size: 100% 100%, 100% 100%;
          color: black
        }
      `}</style>
          </button>
        </Link>
      </section>
    </main>
  )
}

export default PortfolioNav