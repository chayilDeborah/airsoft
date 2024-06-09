import Image from 'next/image'
import React from 'react'
import video from '../assets/video.svg'
import insta from '../assets/insta.svg'
import Link from 'next/link'


const ContactComponent = () => {
    return (
        <main className='flex justify-center mt-[2px] mb-0px] pb-[150px] '>
            <section className='lg:max-w-[1450px] w-full mx-auto '>
                <h1 className='mx-auto text-[70px] leading-[91px] text-[#1B1C1E] w-[1125px]  '><i className='font-light'>Unlock</i> your design
                    <p>potential with our studio&#39;s expertise</p></h1>
                <div className='flex justify-between mt-[64px] w-[80%] mx-auto '>
                    <section>
                        <div className='bg-[#000000] text-[#FFFFFF] rounded-[30px] w-[511px] py-[70px] '>
                            <div className='w-[301px] mx-auto'>
                                <h3 className=' text-[18.6px] leading-[24.15px] w-fit font-medium '>Let&#39;s get started.</h3>
                                <p className='text-[14.8px] leading-[19.32px] font-light mt-[15px] font-italics '><i>We want to hear from you to get an awesome fantasy concept art project started!</i></p>
                                <button className='mt-[29.7px] border-[1.54px] border-[#F5F5F5] rounded-[25.74px] w-[132.7px] h-[52px] text-[15.4px] leading-[20px] text-[#F5F5F5]   '>Let&#39;s Chat</button>
                            </div>
                        </div>
                        <form className='mt-[50px] '>
                            <label className='text-[20px] leading-[26px] text-[#1B1C1E] '>Subscribe to our Fantasy World Newsletter</label>
                            <div className='mt-[20px] w-[511px] h-[66px] rounded-[30px] border-[2.54px] border-black flex justify-between '>
                                <input className='text-[#1B1C1E] bg-[#F5F5F5] ml-[27px] my-[23px] text-[15px] leading-[19.5px] outline outline-none ' placeholder='Enter your email '/>
                                <button className='bg-black rounded-r-[30px] w-[143px] h-[63px] text-white border-[1px] border-black text-[15px] leading-[19.5px] -mr-[2px] '>Subscribe</button>
                            </div>
                        </form>
                    </section>
                    <section>
                        <div className='w-[410px] h-[400px] border-[#1B1C1E] border-[2px] rounded-[30px] text-[#1B1C1E] pb-[94px] '>
                            <div className='mt-[65px] ml-[72px] w-[272px] '>
                                <Image src={video} alt='video-svg' className='' />
                                <h1 className='my-[17.6px] font-medium text-[22.1px] leading-[28.7px] '>Book a Call</h1>
                                <p className='text-[17.6px] leading-[22.9px] font-light '><i>Learn more about how our concept art fantasy studio works and how it can help you.</i></p>
                                <button className='mt-[17.6px] border-[1.84px] border-[#1B1C1E] rounded-[30.5px] w-[167.7px] h-[62px] text-[18.3px] leading-[23.8px]    '>Book a Call</button>
                            </div>
                        </div>
                        <div className='flex mt-[29px] '>
                            <h1 className='text-[20px] leading-[26px] text-[#1B1C1E] mr-[20px] '>Follow us on</h1>
                            <div className='flex w-[142px] justify-between '>
                                <Link href='https://www.instagram.com/airsoft.studios/'>
                            <Image src={insta} alt='instagram' className='' />
                            </Link>

                            </div>
                        </div>
                    </section>
                </div>
            </section>

        </main>
    )
}

export default ContactComponent