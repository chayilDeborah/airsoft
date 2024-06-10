import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
    return (
        <main className='flex justify-center bg-[#f5f5f5]  '>
            <div className='w-full'>
            <section className='lg:w-full w-[93%]  lg:max-w-[1450px] mx-auto mt-[30px] lg:mt-[50px] '>
                <Navbar />
                <section className='mt-[52px] '>
                    <h1 className='text-[40.78px] leading-[53px] lg:text-[96px] lg:leading-[124.8px] text-[#1B1C1E] lg:w-[811px] mx-auto '><i className='font-light text-[#28292c]'>Story</i>  of the mythic dragons </h1>

                    <div className='mt-[35px] lg:mt-[50px] md:flex justify-between w-full lg:w-[80%] mx-auto '>
                        <h1 className='text-[15px] leading-[19.5px] lg:text-[30px] lg:leading-[39px] text-[#1B1C1E] font-medium  '>Our Story</h1>
                        <div className='text-[#1B1C1E] text-[15px] leading-[19.5px] mt-[15px] md:mt-[0px] lg:text-[25px] lg:leading-[32.5px] lg:w-[725px] '>
                            <p>Welcome to AirSoftWorld, your premier destination for custom fantasy art. We specialize in crafting innovative and captivating designs that breathe life into your fantasy worlds. Whether it’s dark fantasy, epic fantasy, urban fantasy, mythic fantasy, or steampunk, our exceptional artwork transforms your vision into extraordinary masterpieces. From games and novels to comics and animations, our work is recognized by top-tier companies.</p>
                            <p className='my-[20px]'>Discover the magic of AirSoftWorld and let us turn your ideas into visual masterpieces. </p>
                            <p>Reach out to us today and embark on a journey from concept to stunning final design.</p>
                        </div>
                    </div>
                    <div className='mt-[30px] mb-[100px] md:my-[100px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:w-[924px] text-[#1B1C1E]'>
                        <section className='w-[180px] lg:w-[288px] mx-auto lg:mx-[0px] rounded-[18.75px] lg:rounded-[30px] border-[1.88px] md:border-[3px] border-[#D9D9D9] pt-[24px] lg:pt-[39px] pl-[21px] lg:pl-[35px] '>
                            <h1 className='text-[15.63px] leading-[20.3px] lg:text-[25px] lg:leading-[32.5px] '>Projects </h1>
                            <h1 className='text-[50px] leading-[65px] lg:text-[80px] lg:leading-[104px] font-medium mt-[18.8px] lg:mt-[30px] mb-[24px] lg:mb-[38px] '>40</h1>
                        </section>
                        <section className='w-[180px] lg:w-[288px] mx-auto lg:mx-[0px] rounded-[18.75px] lg:rounded-[30px] border-[1.88px] md:border-[3px] border-[#D9D9D9] pt-[24px] lg:pt-[39px] pl-[21px] lg:pl-[35px] '>
                            <h1 className='text-[15.63px] leading-[20.3px] lg:text-[25px] lg:leading-[32.5px] '>Years of Experience  </h1>
                            <h1 className='text-[50px] leading-[65px] lg:text-[80px] lg:leading-[104px] font-medium mt-[18.8px] lg:mt-[30px] mb-[24px] lg:mb-[38px] '>5</h1>
                        </section>
                        <section className='w-[180px] lg:w-[288px] mx-auto lg:mx-[0px] rounded-[18.75px] lg:rounded-[30px] border-[1.88px] md:border-[3px] border-[#D9D9D9] pt-[24px] lg:pt-[39px] pl-[21px] lg:pl-[35px] lg:mt-[0px] mt-[18px] '>
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