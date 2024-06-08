import React from 'react'
import Image from 'next/image'
import whitearoow from '../assets/whitearoow.svg'

const Footer = () => {
    return (
        <main className='bg-[#000000] w-full text-white '>
            <section className=' w-full lg:max-w-[1450px] flex justify-center  mx-auto lg:w-full'>
                <div className='w-[80%] flex justify-between mb-[26px] '>
                    <section className='mt-[48px] '>
                        <h2 className='text-[20px] leading-[26px] text-[#9D9393] mb-[44px] '>Contact Details</h2>
                        <h1 className='text-[20px] leading-[26px] text-[#F5F5F5]'>Sam@airsoftstudios.com </h1>
                    </section>
                    <section className='mt-[26px] '>
                        <div className='w-[82px] -rotate-[60deg] mx-auto mt-auto h-[82px] mb-[20px] rounded-[50%] border-[2px] flex justify-center border-[#FFFFFF] '>
                            <Image src={whitearoow} alt='birds-img' className='my-auto mx-auto ' />
                        </div>
                        <h1 className='text-[20px] leading-[26px]'>© 2024 ALL RIGHTS RESERVED</h1>
                    </section>
                    <div className='mt-[48px] '>
                        <h1 className='text-[20px] leading-[26px] text-[#9D9393] mb-[20px] '>Follow us on social media </h1>
                        <div className='flex w-[207px] mx-auto justify-between '>
                            <div className='w-[60px] h-[60px] bg-[#D9D9D9] rounded-[50%] '></div>
                            <div className='w-[60px] h-[60px] bg-[#D9D9D9] rounded-[50%] '></div>
                            <div className='w-[60px] h-[60px] bg-[#D9D9D9] rounded-[50%] '></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Footer