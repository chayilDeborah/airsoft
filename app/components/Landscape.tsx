import React from 'react'
import Image from 'next/image'
import titanic from '../../public/titanic.jpg'
import shrimp from '../../public/shrimp.jpg'
import swap from '../../public/swap.jpg'
import city from '../../public/city.jpg'
import redsky from '../../public/redsky.png'
import bluey from '../../public/bluey.png'
import oldhouse from '../../public/oldhouse.jpg'
import nyc from '../../public/nyc.jpg'

const Landscape = () => {

  return (
    <main className='flex justify-center mt-[30px] overflow-hidden '>
    <section className='grid grid-cols-2 lg:grid-cols-4 justify-evenly lg:w-[1110px] w-full '>
      <Image src={shrimp} alt='superwoman' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] rounded-[15px] lg:rounded-[30px] ' data-aos="fade-up" data-duration="1400"/>
      <Image src={redsky} alt='ancient-house' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] rounded-[15px] lg:rounded-[30px]  ' data-aos="fade-up" data-duration="1500"/>
      <Image src={swap} alt='yoki' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] rounded-[15px] lg:rounded-[30px] my-[20px] lg:my-[0px] ' data-aos="fade-up" data-duration="1600"/>
      <Image src={bluey} alt='old-man' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] rounded-[15px] lg:rounded-[30px] my-[20px] lg:my-[0px]' data-aos="fade-up" data-duration="1700"/>
      <Image src={oldhouse} alt='superwoman' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] rounded-[15px] lg:rounded-[30px] mt-[20px] lg:mt-[52px] ' data-aos="fade-up" data-duration="1800"/>
      <Image src={nyc} alt='superwoman' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] rounded-[15px] lg:rounded-[30px] mt-[20px] lg:mt-[52px]' data-aos="fade-up" data-duration="1900"/>
      <Image src={titanic} alt='superwoman' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] rounded-[15px] lg:rounded-[30px] mt-[20px] lg:mt-[52px]' data-aos="fade-up" data-duration="2000"/>
      <Image src={city} alt='superwoman' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] rounded-[15px] lg:rounded-[30px] mt-[20px] lg:mt-[52px]' data-aos="fade-up" data-duration="2100"/>
  

    </section>
  </main>
  )
}

export default Landscape