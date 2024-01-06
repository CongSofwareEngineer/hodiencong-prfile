import React from 'react'
import MyImage from '../MyImage'
import { images } from '@/config/images'

const Header = () => {
  return (
    <header className='flex justify-center items-center w-full bg-slate-300   h-14'>
      <div className='h-full w-full max-w-[1500px] px-5 md:px-12 flex justify-between items-center' >
        <MyImage
          src={images.avatar}
          height='100%'
          width='auto'
        />
        header

      </div>
    </header>
  )
}

export default Header
