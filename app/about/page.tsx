"use client"
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NavigationMenu from '../components/NavigationMenu'

const About = () => {

    const [count, setCount] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (count < 45) {
      timeout = setTimeout(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100); // Adjust the timeout duration as needed
    }

    return () => clearTimeout(timeout);
  }, [count]);

  

    return (
        <main className='flex justify-center bg-[#f5f5f5] overflow-hidden  '>
            <div className='w-full'>
                <section className='lg:w-full w-[93%]  lg:max-w-[1450px] mx-auto mt-[30px] lg:mt-[50px] '>
                    <Navbar />
                    <section className='mt-[52px] '>
                        <h1 className='text-[40.78px] leading-[53px] lg:text-[78.6px] lg:leading-[124.8px] text-[#1B1C1E] lg:w-[675px] mx-auto lg:ml-[300px] ' data-aos="fade-up"><i className='font-light text-[#28292c]' data-aos="fade-up">Story</i>  of the mythic dragons </h1>
                        <div className='flex'>
                            <NavigationMenu />
                            <div className='content video-container mt-[15px] lg:mt-[64px] w-fit mx-auto ' data-aos="fade-down">
                                <video loop className="lg:w-[1060px] object-cover lg:h-[383px] h-[209px] w-[380px] " autoPlay muted>
                                    <source src="/samura.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className='mt-[20px] lg:mt-[47px] md:flex justify-between w-full lg:w-[84%] mx-auto lg:ml-[18.8%] '>
                            <h1 className='text-[15px] leading-[19.5px] lg:text-[30px] lg:leading-[39px] text-[#1B1C1E] font-medium  ' data-aos="fade-up" data-duration="1400">Our Story</h1>
                            <div className='text-[#1B1C1E] text-[15px] leading-[19.5px] mt-[15px] md:mt-[0px] lg:text-[23.97px] lg:leading-[31.1px] lg:w-[695px] lg:mr-[70px] ' data-aos="fade-up" data-duration="1500">
                                <p>Welcome to AirSoftWorld, your premier destination for custom fantasy art. We specialize in crafting innovative and captivating designs that breathe life into your fantasy worlds. Whether it’s dark fantasy, epic fantasy, urban fantasy, mythic fantasy, or steampunk, our exceptional artwork transforms your vision into extraordinary masterpieces. From games and novels to comics and animations, our work is recognized by top-tier companies.</p>
                                <p className='my-[20px]'>Discover the magic of AirSoftWorld and let us turn your ideas into visual masterpieces. </p>
                                <p>Reach out to us today and embark on a journey from concept to stunning final design.</p>
                            </div>
                        </div>
                        <div className='mt-[30px] mb-[100px] md:my-[100px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:w-[924px] gap-[20px] lg:gap-[0px] text-[#1B1C1E]'>
                            <section className='w-[165px] lg:w-[288px] mx-auto lg:mx-[0px] rounded-[18.75px] lg:rounded-[30px] border-[1.88px] md:border-[3px] border-[#D9D9D9] pt-[24px] lg:pt-[39px] pl-[21px] lg:pl-[35px] ' data-aos="fade-up" data-duration="1600">
                                <h1 className='text-[15.63px] leading-[20.3px] lg:text-[25px] lg:leading-[32.5px]  mb-[18.8px] lg:mb-[30px]  '>Projects </h1>
                                    <div className="relative lg:h-[84px] h-[72px] overflow-hidden">
                                        <div
                                            className="absolute transition-transform duration-300 ease-out"
                                            // style={{ transform: `translateY(-${count * 104}px)` }}
                                        >
                                            {/* {Array.from({ length: 90 }, (_, i) => ( */}
                                                <h1
                                                    key={count}
                                                    className="text-[50px] leading-[65px] lg:text-[80px] lg:leading-[104px] font-medium"
                                                >
                                                    {count}
                                                </h1>
                                            {/* ))} */}
                                        </div>
                                    </div>
                            </section>
                            <section className='w-[165px] lg:w-[288px] mx-auto lg:mx-[0px] rounded-[18.75px] lg:rounded-[30px] border-[1.88px] md:border-[3px] border-[#D9D9D9] pt-[24px] lg:pt-[39px] pl-[21px] lg:pl-[35px] ' data-aos="fade-up" data-duration="1700">
                                <h1 className='text-[15.63px] leading-[20.3px] lg:text-[25px] lg:leading-[32.5px] '>Years of Experience  </h1>
                                <h1 className='text-[50px] leading-[65px] lg:text-[80px] lg:leading-[104px] font-medium mt-[18.8px] lg:mt-[30px] mb-[24px] lg:mb-[38px] '>5</h1>
                            </section>
                            <section className='w-[165px] lg:w-[288px] mx-auto lg:mx-[0px] rounded-[18.75px] lg:rounded-[30px] border-[1.88px] md:border-[3px] border-[#D9D9D9] pt-[24px] lg:pt-[39px] pl-[21px] lg:pl-[35px] lg:mt-[0px] mt-[18px] ' data-aos="fade-up" data-duration="1800">
                                <h1 className='text-[15.63px] leading-[20.3px] lg:text-[25px] lg:leading-[32.5px] '>Average Review </h1>
                                <h1 className='text-[50px] leading-[65px] lg:text-[80px] lg:leading-[104px] font-medium mt-[18.8px] lg:mt-[30px] mb-[24px] lg:mb-[38px] '>4.5</h1>
                            </section>
                        </div>
                    </section>
                </section>
                <Footer />
            </div>
        </main>
    )
}

export default About