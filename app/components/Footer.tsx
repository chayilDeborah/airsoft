import React from 'react'
import Image from 'next/image'
import whitearoow from '../assets/whitearoow.svg'
import instagram from '../assets/instagram.svg'
import Link from 'next/link'

const Footer = () => {
    return (
        <main className='bg-[#000000] w-full text-white overflow-hidden ' id='footer'>
            <section className='w-[93%]  lg:w-full lg:max-w-[1450px] flex justify-center  mx-auto lg:w-full'  data-aos="zoom-out">
                <div className='w-[80%] text-center lg:text-left lg:flex justify-between mb-[36px] '>
                <div className='mt-[32px] lg:mt-[48px] lg:hidden block '>
                        <h1 className='text-[15px] lg:text-[20px] leading-[19.5px] lg:leading-[26px] text-[#9D9393] mb-[15px] lg:mb-[20px] '>Follow us on social media </h1>
                        <div className='flex w-[34px] lg:w-[207px] mx-auto justify-between '>
                        <Link href='https://www.instagram.com/airsoft.studios/'>
                            <Image src={instagram} alt='instagram' className='' />
                            </Link>
                        </div>
                    </div>
                    <section className='mt-[35px] lg:mt-[48px] '>
                        <h2 className='text-[15px] lg:text-[20px] leading-[19.5px] lg:leading-[26px] text-[#9D9393] mb-[44px] '>Contact Details</h2>
                        <h1 className='text-[15px] lg:text-[20px] leading-[19.5px] lg:leading-[26px] text-[#F5F5F5]'><a href="mailto:Sam@airsoftstudios.com">Sam@airsoftstudios.com</a> </h1>
                    </section>
                    <section className='mt-[26px] '>
                        <Link href='/'>
                        <div className='w-[50px] lg:w-[67px] -rotate-[60deg] mx-auto mt-auto h-[50px] lg:h-[67px] mb-[20px] rounded-[50%] border-[2px] flex justify-center border-[#FFFFFF] '>
                            <Image src={whitearoow} alt='birds-img' className='my-auto mx-auto  lg:w-[20px] w-[15px] ' />
                        </div>
                        </Link>
                        <h1 className='text-[15px] lg:text-[20px] leading-[19.5px] lg:leading-[26px] mb-[52px] lg:mb-[0px] '>© 2024 ALL RIGHTS RESERVED</h1>
                    </section>
                    <div className='mt-[48px] hidden lg:block '>
                        <h1 className='text-[15px] lg:text-[20px] leading-[19.5px] lg:leading-[26px] text-[#9D9393] mb-[20px] '>Follow us on social media </h1>
                        <div className='flex w-[207px] lg:w-fit mx-auto justify-between '>
                        <Link href='https://www.instagram.com/airsoft.studios/'>
                            <Image src={instagram} alt='instagram' className='' />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Footer