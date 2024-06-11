import Image from 'next/image'
import React from 'react'
import video from '../assets/video.svg'
import insta from '../assets/insta.svg'
import Link from 'next/link'


const ContactComponent = () => {
    return (
        <main className='flex justify-center mt-[2px] mb-0px] pb-[50px] lg:pb-[150px] '>
            <section className='lg:max-w-[1450px] w-[93%] lg:w-full mx-auto '>
                <h1 className='mx-auto lg:text-[70px] text-[21.78px] leading-[28.3px] lg:leading-[91px] text-[#1B1C1E] lg:w-[1125px]  '><i className='font-light'>Unlock</i> your design
                    <p>potential with our studio&#39;s expertise</p></h1>
                <div className='lg:flex justify-between mt-[30px] lg:mt-[64px] w-[95%] lg:w-[80%] mx-auto '>
                    <section>
                        <div className='bg-[#000000] text-[#FFFFFF] rounded-[22.3px] lg:rounded-[30px] lg:w-[511px] pl-[29px] lg:pl-[0px] py-[32px] lg:py-[70px] '>
                            <div className='w-[301px] lg:mx-auto'>
                                <h3 className=' text-[18.6px] leading-[24.15px] w-fit font-medium '>Let&#39;s get started.</h3>
                                <p className='text-[14.8px] leading-[19.32px] font-light mt-[15px] font-italics w-[290px] lg:w-full '><i>We want to hear from you to get an awesome fantasy concept art project started!</i></p>
                                <button className='mt-[29.7px] border-[1.54px] border-[#F5F5F5] rounded-[25.74px] w-[132.7px] h-[52px] lg:text-[15.4px] text-[] leading-[] lg:leading-[20px] lg:text-[#F5F5F5]   '>Let&#39;s Chat</button>
                            </div>
                        </div>
                        <form className='mt-[50px] hidden lg:block '>
                            <label className='lg:text-[20px] text-[] leading-[] lg:leading-[26px] text-[#1B1C1E] '>Subscribe to our Fantasy World Newsletter</label>
                            <div className='mt-[20px] w-[511px] h-[66px] rounded-[30px] border-[2.54px] border-black flex justify-between '>
                                <input className='text-[#1B1C1E] bg-[#F5F5F5] ml-[27px] my-[23px] lg:text-[15px] text-[] leading-[] lg:leading-[19.5px] outline outline-none ' placeholder='Enter your email '/>
                                <button className='bg-black rounded-r-[30px] w-[143px] h-[63px] text-white border-[1px] border-black lg:text-[15px] text-[] leading-[] lg:leading-[19.5px] -mr-[2px] '>Subscribe</button>
                            </div>
                        </form>
                    </section>
                    <section className='flex flex-col-reverse lg:flex-col '>
                        <div className='lg:w-[410px] h-[370px] lg:h-[400px] border-[#1B1C1E] border-[2px] rounded-[30px] text-[#1B1C1E] pb-[94px] '>
                            <div className='mt-[46px] lg:mt-[65px] ml-[30px] lg:ml-[72px] w-[272px] '>
                                <Image src={video} alt='video-svg' className='' />
                                <h1 className='my-[17.6px] font-medium lg:text-[22.1px] text-[] leading-[] lg:leading-[28.7px] '>Book a Call</h1>
                                <p className='lg:text-[17.6px] text-[] leading-[] lg:leading-[22.9px] font-light '><i>Learn more about how our concept art fantasy studio works and how it can help you.</i></p>
                                <button className='mt-[17.6px] border-[1.84px] border-[#1B1C1E] rounded-[30.5px] w-[167.7px] h-[62px] lg:text-[18.3px] text-[] leading-[] lg:leading-[23.8px]    '>Book a Call</button>
                            </div>
                        </div>
                        <div className='flex mt-[29px] w-fit mx-auto lg:mx-[0px] mb-[30px] lg:mb-[0px] '>
                            <h1 className='text-[20px] leading-[26px] text-[#1B1C1E] mr-[20px] '>Follow us on</h1>
                            <div className='flex lg:w-[142px] justify-between '>
                                <Link href='https://www.instagram.com/airsoft.studios/'>
                            <Image src={insta} alt='instagram' className='' />
                            </Link>

                            </div>
                        </div>
                    </section>
                    <form className='mt-[30px] lg:mt-[50px] lg:hidden block '>
                            <label className='lg:text-[20px] text-[14.8px] leading-[19px] lg:leading-[26px] text-[#1B1C1E] '>Subscribe to our Fantasy World Newsletter</label>
                            <div className='mt-[14px] lg:mt-[20px] lg:w-[511px] h-[49px] lg:h-[66px] rounded-[30px] border-[1.49px] lg:border-[2.54px] border-black flex justify-between '>
                                <input className='text-[#1B1C1E] bg-[#F5F5F5] ml-[27px] my-[17px] lg:my-[23px] lg:text-[15px] text-[11.2px] leading-[14.5px] lg:leading-[19.5px] outline outline-none ' placeholder='Enter your email '/>
                                <button className='bg-black rounded-r-[30px] w-[106px] lg:w-[143px] h-[47px] lg:h-[63px] text-white border-[0.74px] lg:border-[1px] border-black lg:text-[15px] text-[] leading-[] lg:leading-[19.5px] -mr-[2px] '>Subscribe</button>
                            </div>
                        </form>
                </div>
            </section>

        </main>
    )
}

export default ContactComponent