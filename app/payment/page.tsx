import React from 'react'
import Navbar from '../components/Navbar'
import QuoteForm from '../components/QuoteForm'
import LatestWorks from '../components/LatestWork'
import Footer from '../components/Footer'

const Payment = () => {

    const images = [
        '/sup.png', 
        '/ancient.png',
        '/yoki.png',
        '/oldie.png',
        '/bluey.png',
        '/plane.png',
        '/boat.png',
        '/reddie.png', 
        '/kima.png',
        '/kiyu.jpg',
        '/kita.jpg',
        '/iron.jpg',
        '/heist.jpg',
    ]

  return (
    <main className='flex justify-center bg-[#f5f5f5] overflow-hidden  ' data-aos="zoom-out" >
         <div className='w-full'>
         <section className='lg:w-full w-[93%] lg:max-w-[1450px] mx-auto mt-[50px] '>
            <Navbar />
            <section className='mt-[52px] w- lg:w-[811px]  mx-auto '>
            <h1 className='text-[44.3px] leading-[57.6px]  lg:text-[96px] lg:leading-[124.8px] text-[#1B1C1E] '><i className='font-light text-[#28292c]'>Fantasy</i> Payment Gate</h1>
            <div className='mt-[52px] '>
                <QuoteForm />
                
            </div>
            </section>
            <LatestWorks images={images}/>
         </section>
         <Footer />
         </div>
    </main>
  )
}

export default Payment