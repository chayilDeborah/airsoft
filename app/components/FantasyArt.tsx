import React from 'react'
import Image from 'next/image'
import wings from '../../public/wings.png'
import thanos from '../../public/thanos.jpg'
import teeth from '../../public/teeth.jpg'
import shrek from '../../public/shrek.png'
import black from '../../public/black.jpg'
import ancient from '../../public/ancient.png'
import titanic from '../../public/titanic.jpg'
import fire from '../../public/fire.png'


const FantasyArt = () => {
  return (
    <main className='flex justify-center mt-[30px] overflow-hidden '>
    <section className='grid grid-cols-2 lg:grid-cols-4 justify-evenly lg:w-[1110px] w-full '>
      <Image src={wings} alt='superwoman' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] rounded-[15px] lg:rounded-[30px] ' />
      <Image src={thanos} alt='ancient-house' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] rounded-[15px] lg:rounded-[30px]  ' />
      <Image src={teeth} alt='yoki' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] rounded-[15px] lg:rounded-[30px] my-[20px] lg:my-[0px] ' />
      <Image src={shrek} alt='old-man' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] rounded-[15px] lg:rounded-[30px] my-[20px] lg:my-[0px]' />
      <Image src={black} alt='superwoman' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] rounded-[15px] lg:rounded-[30px] mt-[20px] lg:mt-[52px] ' />
      <Image src={ancient} alt='superwoman' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] rounded-[15px] lg:rounded-[30px] mt-[20px] lg:mt-[52px]' />
      <Image src={titanic} alt='superwoman' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] rounded-[15px] lg:rounded-[30px] mt-[20px] lg:mt-[52px]' />
      <Image src={fire} alt='superwoman' className='lg:w-[250px] lg:h-[250px] w-[170px] h-[180px] rounded-[15px] lg:rounded-[30px] mt-[20px] lg:mt-[52px]' />
  

    </section>
  </main>
  )
}

export default FantasyArt