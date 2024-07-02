"use client"
import React, {useEffect} from "react"
import Homepage from './components/Homepage'
import Aos from "aos"
import "aos/dist/aos.css"; 
import Head from 'next/head';

export default function Home() {

  useEffect(() => {
    Aos.init({
       offset: 0,
       duration: 1200,
       easing: "ease",
       delay: 0,
    })
  }, [])
  return (
    <>
    <Head>
        <title>Fantasy Concept Art Services | Custom Fantasy Artwork</title>
        <meta name="description" content="Offering professional fantasy concept art services, including character and landscape art for games, novels, and animations. Discover unique and detailed fantasy artwork tailored to your needs." />
        <meta name="keywords" content="fantasy art, fantasy artwork, fantasy character art, fantasy landscape art, dark fantasy art, fantasy artists, final fantasy art, dark fantasy artwork, fantasy characters, wizard art, ai character art generator, characters in fantasy, fantasy landscapes, landscape fantasy, fantasy landscape wallpaper, drawing cityscapes, fantasy cityscape, pictures fantasy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <main className='flex justify-center  '>
    <section className='w-full'>
     <Homepage />
    </section>
</main>
</>
  )
}
