"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import video from '../assets/video.svg'
import insta from '../assets/insta.svg'
import Link from 'next/link'
import unlockmob from '../assets/unlockmob.png'
import unlockdesk from '../assets/unlockdesk.png'
import lockmob from '../assets/lockmob.svg'
import lockdesk from '../assets/lockdesk.svg'
// import MyDocument from './_document'
import type { AppProps } from 'next/app';


const ContactComponent =() => {

    const [isTawkReady, setIsTawkReady] = useState(false);

    useEffect(() => {
      const checkTawkAPI = () => {
        if (window.Tawk_API) {
          setIsTawkReady(true);
        }
      };
  
      window.addEventListener('tawkLoad', checkTawkAPI);
  
      // Initial check in case the event already fired
      if (window.Tawk_API) {
        setIsTawkReady(true);
      }
  
      return () => {
        window.removeEventListener('tawkLoad', checkTawkAPI);
      };
    }, []);
  
    const handleChatButtonClick = () => {
      if (window.Tawk_API && window.Tawk_API.maximize) {
        window.Tawk_API.maximize();
      } else {
        alert('Chat is not ready yet, please try again in a moment.');
      }
    };
    return (
        <main className='flex justify-center mt-[2px] mb-0px] pb-[50px] lg:pb-[150px] overflow-hidden ' id='contact' >
            <section className='lg:max-w-[1450px] w-[93%] lg:w-full mx-auto '>
            <Image src={unlockdesk} alt='unlock' className='hidden lg:block w-[76%] mx-auto ' />
            <Image src={unlockmob} alt='unlock' className='lg:hidden block w-[94%] mx-auto ' />
                {/* <h1 className='mx-auto lg:text-[70px] text-[21.78px] leading-[28.3px] lg:leading-[91px] text-[#1B1C1E] lg:w-[1125px]  '><i className='font-light'>Unlock</i> your design
                    <p>potential with our studio&#39;s expertise</p></h1> */}
                <div className='lg:flex justify-between mt-[30px] lg:mt-[61px] w-[95%] lg:w-[80%] mx-auto '>
                    <section className=''>
                        <div className='bg-[#000000] lg:mb-[0px] mb-[50px] text-[#FFFFFF] rounded-[22.3px] lg:rounded-[30px] lg:w-[511px] pl-[29px] lg:pl-[0px] py-[32px] lg:py-[70px] '>
                            <div className='w-[301px] lg:mx-auto'>
                                <h3 className=' text-[18.6px] leading-[24.15px] w-fit font-medium ' data-aos="fade-left">Let&#39;s get started.</h3>
                                <p className='text-[14.8px] leading-[19.32px] font-light mt-[15px] font-italics w-[290px] lg:w-full '><i>We want to hear from you to get an awesome fantasy concept art project started!</i></p>
                             
                                <button onClick={handleChatButtonClick}  disabled={!isTawkReady} className='mt-[29.7px] border-[1.54px] border-[#F5F5F5] rounded-[25.74px] w-[132.7px] h-[52px] lg:text-[15.4px] text-[] leading-[] lg:leading-[20px] lg:text-[#F5F5F5]  overflow-hidden relative group '>
                                    <span className='relative z-10 hover:text-black'>Let&#39;s Chat</span>
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
                            </div>
                        </div>
                        {/* <form className='mt-[50px] hidden lg:block ' data-aos="fade-right">
                            <label className='lg:text-[20px] text-[] leading-[] lg:leading-[26px] text-[#1B1C1E] '>Subscribe to our Fantasy World Newsletter</label>
                            <div className='mt-[20px] w-[511px] h-[66px] rounded-[30px] border-[2.54px] border-black flex justify-between '>
                                <input className='text-[#1B1C1E] bg-[#F5F5F5] ml-[27px] my-[23px] lg:text-[15px] text-[] leading-[] lg:leading-[19.5px] outline outline-none ' placeholder='Enter your email ' />

                                <button className='bg-black rounded-r-[30px] w-[143px] h-[63px] text-white border-[1px] border-black lg:text-[15px] text-[] leading-[] lg:leading-[19.5px] -mr-[2px] overflow-hidden relative group'>
                                    
                                    <span className='relative z-10 hover:text-black'>Subscribe</span>
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
                            </div>
                        </form> */}
                          <div className='flex mt-[29px] w-fit mx-auto lg:mx-[0px] mb-[30px] lg:mb-[0px] ' data-aos="fade-up">
                            <h1 className='text-[20px] leading-[26px] text-[#1B1C1E] mr-[20px] '>Message us on</h1>
                            <div className='flex lg:w-[142px] justify-between '>
                                <Link href='https://www.instagram.com/airsoft.studios/'>
                                    <Image src={insta} alt='instagram' className='' />
                                </Link>

                            </div>
                        </div>
                    </section>
                    <section className='flex flex-col-reverse lg:flex-col '>
                        <div className='lg:w-[410px] h-[370px] lg:h-[400px] border-[#1B1C1E] border-[2px] rounded-[30px] text-[#1B1C1E] pb-[94px] ' data-aos="fade-in">

                            <div className='mt-[46px] lg:mt-[65px] ml-[30px] lg:ml-[72px] w-[272px] ' data-aos="zoom-in">
                                <Image src={video} alt='video-svg' className='' />
                                <h1 className='my-[17.6px] font-medium lg:text-[22.1px] text-[] leading-[] lg:leading-[28.7px] '>Book a Call</h1>
                                <p className='lg:text-[17.6px] text-[] leading-[] lg:leading-[22.9px] font-light '><i>Learn more about how our concept art fantasy studio works and how it can help you.</i></p>
                                <Link href='https://calendly.com/creativewizard03'>
                                <button className='mt-[17.6px] border-[1.84px] border-[#1B1C1E] rounded-[30.5px] w-[167.7px] h-[62px] lg:text-[18.3px] text-[] leading-[] lg:leading-[23.8px]   overflow-hidden relative group'>

                                    <span className='relative z-10 hover:text-white'>Book a Call</span>
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
                            </div>

                        </div>
                      
                    </section>
                    {/* <form className='mt-[30px] lg:mt-[50px] lg:hidden block ' data-aos="fade-right">
                        <label className='lg:text-[20px] text-[14.8px] leading-[19px] lg:leading-[26px] text-[#1B1C1E] '>Subscribe to our Fantasy World Newsletter</label>
                        <div className='mt-[14px] lg:mt-[20px] lg:w-[511px] h-[49px] lg:h-[66px] rounded-[30px] border-[1.49px] lg:border-[2.54px] border-black flex justify-between '>
                            <input className='text-[#1B1C1E] bg-[#F5F5F5] ml-[27px] my-[17px] lg:my-[23px] lg:text-[15px] text-[11.2px] leading-[14.5px] lg:leading-[19.5px] outline outline-none ' placeholder='Enter your email ' />
                            <button className='bg-black rounded-r-[30px] w-[106px] lg:w-[143px] h-[47px] lg:h-[63px] text-white border-[0.74px] lg:border-[1px] border-black lg:text-[15px] text-[] leading-[] lg:leading-[19.5px] -mr-[2px]  overflow-hidden relative group'>
                                <span className='relative z-10 hover:text-black'>Subscribe</span>
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
                        </div>
                    </form> */}
                </div>
            </section>

        </main>
    )
}

export default ContactComponent