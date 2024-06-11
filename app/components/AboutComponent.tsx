import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import whitearoow from '../assets/whitearoow.svg'
import TestimonialCarousel from './AboutCarousel';


const testimonials = [
    {
      name: 'John M.',
      position: 'Game Developer ',
      image: '/avatar.png',
      testimonial: 'AirSoft Studios brought our game world to life in ways we couldnt have imagined. Their landscapes are stunning, and the character designs are incredibly detailed. Our players are constantly praising the visuals. Working with them was a dream!'
    },
    {
      name: 'Lisa T.',
      position: 'Author',
      image: '/avatar.png',
      testimonial: 'I hired AirSoft Studios to create character designs for my novel series, and they exceeded all my expectations. The artists captured the essence of my characters perfectly, and their artwork added a magical touch to my book covers. Highly recommend them!'
    },
    {
      name: 'Samantha L.',
      position: 'Writer',
      image: '/avatar.png',
      testimonial: 'I was blown away by the character designs AirSoft Studios created for my book series. They perfectly captured the personalities and vibes of my characters. The environments they crafted are just as magical. Big shoutout to the team!'
    },
    {
      name: ' Mia C. ',
      position: 'Cosplayer',
      image: '/avatar.png',
      testimonial: 'I commissioned Air Soft Studios for some art for my channel, and they delivered beyond my wildest dreams. The character designs are epic, and the backgrounds are just gorgeous. My followers are obsessed with the new visuals!'
    },
  ];
  
const AboutComponent = () => {
    return (
        <main className='w-full relative mx-auto overflow-hidden mb-[0px] text-black overflow-hidden ' data-aos="fade-left">
            <section className=' w-full relative lg:mt-[0px] lg:h-auto'>
                <div className='content video-container bg-[#000000] relative'>
                    <video loop className="lg:w-full object-cover h-[560px] lg:h-[956px] " autoPlay muted>
                        <source src="/samura.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    <section className='absolute lg:max-w-[1450px] mx-auto w-full mx-auto lg:w-full top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center'>
                        <div className='mx-auto text-white '>
                            <div className='flex '>
                                <div className='w-[95%] mx-auto lg:w-full '>
                                <div className='mt-[35px] lg:mt-[70px] lg:w-[80%] lg:mx-auto '>
                                    <div className='flex justify-between lg:h-[112px] mx-auto lg:mb-[104px] '>
                                        <h1 className=' text-[15px] lg:text-[30px] leading-[19.5px] lg:leading-[39px] my-auto font-medium ' data-aos="fade-up" data-duration="1400">Our Story</h1> 
                                        <Link href='/about' className=' hidden lg:block '>
                                            <div className='lg:w-[82px] lg:h-[82px] w-[25px] h-[25px] mx-[19px] mt-auto lg:mb-[68px] rounded-[50%] border-[0.6px] hover:bg-black hover:border-black lg:border-[2px] flex justify-center border-[#FFFFFF] '>
                                                <Image src={whitearoow} alt='birds-img' className='my-auto mx-auto lg:w-[25px] w-[7px]' />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='lg:flex justify-between  text-[15px] lg:text-[25px] leading-[19.5px] lg:leading-[32.5px] mt-[15px] lg:mt-[0px] '>
                                        <h3 className='  mt-auto lg:w-[212px] hidden lg:block ' data-aos="fade-up" data-duration="1500" >Leading Fantasy Concept Art Studio</h3>
                                        <h3 className='lg:w-[812px] '  data-aos="fade-up" data-duration="1600">Create your captivating dark fantasy, epic fantasy, urban fantasy, mythic fantasy, and steampunk with our custom art. From concept to final design, we turn your ideas into visual masterpiece. Reach out to us today!</h3>
                                        <Link href='/about'>
                                        <button data-aos="zoom-in" className='flex lg:hidden text-white w-[93px] mx-auto h-[30.4px] border-[0.89px] border-white rounded-[14.8px] pl-[19px] my-[35px] hover:bg-black hover:border-black '>
                                            <h1 className='text-[8.9px] leading-[11.6px] my-auto  ' >Read More</h1>
                                            <Image src={whitearoow} alt='arrow' className='my-auto w-[10px] ml-[4px] ' />
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                                <TestimonialCarousel testimonials={testimonials} />
                                </div>
                            </div>

                        </div>

                    </section>
                </div>
            </section>
        </main>
    );
}

export default AboutComponent;
