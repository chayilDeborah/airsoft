import React from 'react'
import Navbar from '../components/Navbar'
import QuoteForm from '../components/QuoteForm'

const Payment = () => {
  return (
    <main className='flex justify-center bg-[#f5f5f5]  '>
         <div className='w-full'>
         <section className='w-full lg:max-w-[1450px] mx-auto mt-[50px] '>
            <Navbar />
            <section className='mt-[52px] w-[811px]  mx-auto '>
            <h1 className='text-[96px] leading-[124.8px] text-[#1B1C1E] '><i className='font-light text-[#28292c]'>Fantasy</i> Payment Gate</h1>
            <div className='mt-[52px] '>
                <QuoteForm />
            </div>
            </section>
         </section>
         </div>
    </main>
  )
}

export default Payment