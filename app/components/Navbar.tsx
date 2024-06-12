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
    <main className='flex justify-center mt-[20px] lg:mt-[30px] overflow-hidden '>
      <section className='lg:w-[80%] w-full flex justify-between '>
        <Link href='/'>
          <Image src={logo} alt='logo' className='w-[89.24px] h-[30px] lg:w-[150px] lg:h-[50px] mt-[20px] lg:mt-[0px] ' />
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
          <Link href="/about">
            <h1 className=" lg:my-auto hover:text-[#150DAD] mt-[24px] ">
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
<button className='hidden lg:block text-[17.1px] leading-[22px] text-[#1B1C1E] rounded-[34.64px] border-[2.08px] border-[#1B1C1E] w-[149px] h-[57px] bg-[#f5f5f5] overflow-hidden relative group'>
      <span className='relative z-10 hover:text-white'>Get Quote</span>
      <div className='absolute inset-0 bg- transition-all duration-500 ease-in-out group-hover:animate-background-flow hover:text-white '></div>
      <style jsx>{`
        button {
          background: linear-gradient(0deg, #000000, #000000),
                      linear-gradient(white, white);
          background-size: 100% 0, 100% 100%;
          background-repeat: no-repeat;
          transition: background-size 0.5s;
        }

        button:hover {
          background-size: 100% 100%, 100% 100%;
          color: white
        }
      `}</style>
    </button>
        </Link>
      </section>
    </main>
  )
}

export default Navbar