'use client'
import React, { useEffect } from 'react'
import Banner from './Components/Banner'
import About from './Components/About'
import Skills from './Components/Skills'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Experience from './Components/Experience'
import ContactMe from './Components/ContactMe'
const HomeScreen = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])

  return (
    <div className='flex flex-col gap-3 w-full'>
      <Banner />
      <br />
      <br />
      <About />
      <br />
      <br />
      <Experience />
      <br />
      <br />
      <Skills />

      <br />
      <br />
      <ContactMe />
    </div>
  )
}

export default HomeScreen
