"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigationMenu: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex flex-col items-start ml-[30px] mr-[60px] mt-auto mb-[195px] w-[117px] overflow-hidden"data-aos-offset="10" data-aos="fade-up" >
      <Link href="/">
        <div data-aos="fade-up" data-duration="1400" className={` py-2  ${pathname === '/' ? 'font-medium text-[20px] hover:text-black leading-[26px] text-[#1B1C1E]' : 'ml-[40px] text-[16px] leading-[26px] text-[#9D9393] '}`}>
          {pathname === '/' && <span className="inline-block w-[9.59px] h-[9.59px] mr-[12px] bg-black rounded-full"></span>}
          Home
        </div>
      </Link>
      <Link href="/about">
        <div data-aos="fade-up" data-duration="1500" className={` py-2  ${pathname === '/about' ? 'font-medium text-[20px] hover:text-black leading-[26px] text-[#1B1C1E]' : 'ml-[40px] text-[16px] leading-[26px] text-[#9D9393] '}`}>
          {pathname === '/about' && <span className="inline-block w-[9.59px] h-[9.59px] mr-[12px] bg-black rounded-full"></span>}
          About us
        </div>
      </Link>
      <Link href="/portfolio">
        <div data-aos="fade-up" data-duration="1600" className={` py-2  ${pathname === '/portfolio' ? 'font-medium text-[20px] hover:text-black leading-[26px] text-white' : 'ml-[40px] text-[16px] leading-[26px] text-[#9D9393] '}`}>
          {pathname === '/portfolio' && <span className="inline-block w-[9.59px] h-[9.59px] mr-[12px] bg-white rounded-full"></span>}
          Portfolio
        </div>
      </Link>
      <Link href="/#contact">
        <div data-aos="fade-up" data-duration="1700" className={` py-2  ${pathname === '/contact' ? 'font-medium text-[20px] hover:text-black leading-[26px] text-[#1B1C1E]' : 'ml-[40px] text-[16px] leading-[26px] text-[#9D9393] '}`}>
          {pathname === '/contact' && <span className="inline-block w-[9.59px] h-[9.59px] mr-[12px] bg-black rounded-full"></span>}
          Contact us
        </div>
      </Link>
    </div>
  );
};

export default NavigationMenu;
