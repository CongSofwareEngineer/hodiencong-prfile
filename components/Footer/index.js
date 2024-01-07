import React from 'react'
import MyImage from '../MyImage'

const Footer = () => {
  return (
    <div className='my-5 w-full flex flex-col items-center justify-center'>
      <div className='text-title uppercase'>
        Hồ Diên Công
      </div>
      <div className='flex gap-1 mb-3'>
        <span>
        Copyright © 2024
        </span>
        <span className='text-blue-600'>
        CÔNG
        </span>
        <span>
        All Rights Reserved.
        </span>

      </div>
    </div>
  )
}

export default Footer
