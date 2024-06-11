"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigationMenu: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex flex-col items-start ml-[10px] mr-[60px] mt-auto mb-[195px] w-[117px] ">
      <Link href="/">
        <div className={` py-2 ${pathname === '/' ? 'font-medium text-[20px] leading-[26px] text-[#1B1C1E]' : 'ml-[40px] text-[16px] leading-[26px] text-[#9D9393] '}`}>
          {pathname === '/' && <span className="inline-block w-[15px] h-[15px] mr-[12px] bg-black rounded-full"></span>}
          Home
        </div>
      </Link>
      <Link href="/about">
        <div className={` py-2 ${pathname === '/about' ? 'font-medium text-[20px] leading-[26px] text-[#1B1C1E]' : 'ml-[40px] text-[16px] leading-[26px] text-[#9D9393] '}`}>
          {pathname === '/about' && <span className="inline-block w-[15px] h-[15px] mr-[12px] bg-black rounded-full"></span>}
          About us
        </div>
      </Link>
      <Link href="/portfolio">
        <div className={` py-2 ${pathname === '/portfolio' ? 'font-medium text-[20px] leading-[26px] text-white' : 'ml-[40px] text-[16px] leading-[26px] text-[#9D9393] '}`}>
          {pathname === '/portfolio' && <span className="inline-block w-[15px] h-[15px] mr-[12px] bg-white rounded-full"></span>}
          Portfolio
        </div>
      </Link>
      <Link href="/#contact">
        <div className={` py-2 ${pathname === '/contact' ? 'font-medium text-[20px] leading-[26px] text-[#1B1C1E]' : 'ml-[40px] text-[16px] leading-[26px] text-[#9D9393] '}`}>
          {pathname === '/contact' && <span className="inline-block w-[15px] h-[15px] mr-[12px] bg-black rounded-full"></span>}
          Contact us
        </div>
      </Link>
    </div>
  );
};

export default NavigationMenu;
