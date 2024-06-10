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
        <Image src={sup} alt='superwoman' className='w-[170px] h-[180px] ' />
        <Image src={ancient} alt='ancient-house' className='w-[170px] h-[180px]  ' />
        <Image src={yoki} alt='yoki' className='w-[170px] h-[180px] my-[20px] lg:my-[0px] ' />
        <Image src={oldie} alt='old-man' className='w-[170px] h-[180px] my-[20px] lg:my-[0px]' />
        <Image src={bluey} alt='superwoman' className='w-[170px] h-[180px] mt-[20px] lg:mt-[52px] ' />
        <Image src={plane} alt='superwoman' className='w-[170px] h-[180px] mt-[20px] lg:mt-[52px]' />
        <Image src={boat} alt='superwoman' className='w-[170px] h-[180px] mt-[20px] lg:mt-[52px]' />
        <Image src={gang} alt='superwoman' className='w-[170px] h-[180px] mt-[20px] lg:mt-[52px]' />
    

      </section>
    </main>
  )
}

export default AllArt