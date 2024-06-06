import Image from 'next/image'
import React from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <main className='flex justify-center mt-[30px] overflow-hidden '>
           <section className='w-[80%] flex justify-between '>
            <Image src={logo} alt='logo' className='' />
            <button className='text-[20.79px] leading-[27px] text-[#1B1C1E] rounded-[34.64px] border-[2.08px] border-[#1B1C1E] w-[180px] h-[69.8px] '>Get Quote</button>

           </section>
    </main>
  )
}

export default Navbar