import Image from 'next/image'
import React from 'react'
import sup from '../assets/sup.png'
import ancient from '../assets/ancient.png'
import yoki from '../assets/yoki.png'
import oldie from '../assets/oldie.png'
import bluey from '../assets/bluey.png'
import plane from '../assets/plane.png'
import boat from '../assets/boat.png'
import gang from '../assets/gang.png'

const AllArt = () => {
  return (
    <main className='flex justify-center mt-[30px] overflow-hidden '>
      <section className='grid grid-cols-2 lg:grid-cols-4 justify-evenly lg:w-[1110px] w-full '>
        <Image src={sup} alt='superwoman' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] ' data-aos="fade-up" data-duration="1400"/>
        <Image src={ancient} alt='ancient-house' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px]  ' data-aos="fade-up" data-duration="1500"/>
        <Image src={yoki} alt='yoki' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] my-[20px] lg:my-[0px] ' data-aos="fade-up" data-duration="1600"/>
        <Image src={oldie} alt='old-man' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] my-[20px] lg:my-[0px]' data-aos="fade-up" data-duration="1700"/>
        <Image src={bluey} alt='superwoman' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] mt-[20px] lg:mt-[52px] ' data-aos="fade-up" data-duration="1800"/>
        <Image src={plane} alt='superwoman' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] mt-[20px] lg:mt-[52px]' data-aos="fade-up" data-duration="1900"/>
        <Image src={boat} alt='superwoman' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] mt-[20px] lg:mt-[52px]' data-aos="fade-up" data-duration="2000"/>
        <Image src={gang} alt='superwoman' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] mt-[20px] lg:mt-[52px]' data-aos="fade-up" data-duration="2100"/>
    

      </section>
    </main>
  )
}

export default AllArt