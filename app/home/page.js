'use client'
import React, { useEffect, useRef } from 'react'
import Banner from './Components/Banner'
import About from './Components/About'
import Skills from './Components/Skills'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Experience from './Components/Experience'
import ContactMe from './Components/ContactMe'
import styled from 'styled-components'
import MyImage from '@/components/MyImage'
import { images } from '@/config/images'
const Icon = styled(MyImage)`
  width: 30px !important;
`
const HomeScreen = () => {
  const refBanner = useRef(null)
  const refAbout = useRef(null)
  const refExperience = useRef(null)
  const refSkills = useRef(null)
  const refContactMe = useRef(null)

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])

  const renderOption = () => {
    return (
      <div className='fixed right-[100px] bottom-[100px]'>
        <div className='flex flex-col border-solid border-2 p-2 rounded-2xl'>
          <Icon src={images.icon.iconFace} />
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-3 w-full relative'>
      <Banner ref={refBanner} />
      <br />
      <br />
      <About ref={refAbout} />
      <br />
      <br />
      <Experience ref={refExperience} />
      <br />
      <br />
      <Skills ref={refSkills} />

      <br />
      <br />
      <ContactMe ref={refContactMe} />
      {renderOption()}
    </div>
  )
}

export default HomeScreen
