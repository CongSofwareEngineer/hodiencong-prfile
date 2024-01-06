import React from 'react'
import MyButton from '../MyButton'

const TitleComponent = ({ title, click = () => {}, icon, className, classNameButton }) => {
  return (
    <div data-aos="fade-right" className={`w-full flex gap-3 my-5 items-center ${className}`}>
      <div className='w-14 bg-blue-600 h-[2px]' />
      <MyButton
        onClick={click}
        className={`rounded-2xl min-w-fit ${classNameButton}`}
      >
        <div className='w-full min-w-[100px] flex items-center justify-between'>
          {
            typeof icon === 'string'
              ? (
                <img
                  className='h-5 w-5'
                  src={icon}
                />
              )
              : (
                icon
              )
          }

          <span>
            {title || 'About'}
          </span>
        </div>
      </MyButton>
    </div>
  )
}

export default TitleComponent
