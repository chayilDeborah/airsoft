import Image from 'next/image'
import React from 'react';
import whitelogo from '../assets/whitelogo.png'

const PorfolioNav = () => {
  return (
    <main className='flex justify-center mt-[30px] overflow-hidden '>
    <section className='w-[80%] flex justify-between '>
     <Image src={whitelogo} alt='whitelogo' className='' />
     <button className='text-[20.79px] leading-[27px] text-[#FFFFFF] rounded-[34.64px] border-[2.08px] border-[#FFFFFF] w-[180px] h-[69.8px] '>Get Quote</button>

    </section>
</main>
  )
}

export default PorfolioNav