import MyButton from '@/components/MyButton'
import MyImage from '@/components/MyImage'
import { images } from '@/config/images'
import { viewExternal } from '@/utils/function'
import React from 'react'
import Media from 'react-media'

const Banner = ({ ref }) => {
  const openGmail = () => {
    viewExternal('https://mail.google.com/')
  }

  const renderContent = () => {
    return (
      <div className='  flex flex-1 relative flex-col w-full md:w-auto max-w-full md:max-w-[50%] gap-4  md:gap-8 '>
        <p className='text-[42px] font-bold w-full'>
          Hello
        </p>
        <div className='w-full uppercase flex items-baseline text-title gap-1'>
          {

          }
          <div className='h-[2px]  w-[0px] md:w-[100px]  bg-blue-600' />
          <div>
            My Name
          </div>
          <div className='text-blue-600'>
            Hồ Diên Công
          </div>

        </div>
        <p className='text-[32px]  md:text-[42px]  '>
             Front End Developer
        </p>
        <div className='w-[76 %] flex items-center'>
          <MyButton className={'uppercase rounded-2xl m-auto'}>
            Contact me
          </MyButton>
        </div>
        <div className='w-full flex flex-col md:flex-row gap-3'>
          <div>
            <div className='font-bold'>
              Email
            </div>
            <a href='#' className='hover:text-blue-700' onClick={openGmail}>hodiencong2000@gmail.com</a>
          </div>
          <div className='border-l-blue-600 border-l-2 pl-2'>
            <div className='font-bold'>
            Phone
            </div>
            <span>0392225405</span>
          </div>
          <div className='border-l-blue-600 border-l-2 pl-2'>
            <div className='font-bold'>
            Location
            </div>
            <span>Hồ Chí Minh</span>
          </div>
        </div>
      </div>
    )
  }

  const renderInfo = () => {
    return (
      <Media query='(min-width: 768px)'>
        {(match) => {
          if (match) {
            return (
              <>
                <MyImage
                  src={images.icon.iconFace}
                  height='auto'
                  width='100%'
                  className='rounded-[50%] cursor-pointer hover:scale-110'
                  onClick={() => viewExternal('https://www.facebook.com/profile.php?id=100080400793331')}
                />

                <MyImage
                  src={images.icon.iconGithub}
                  height='auto'
                  width='100%'
                  className='rounded-[50%] cursor-pointer hover:scale-110'
                  onClick={() => viewExternal('https://github.com/CongSofwareEngineer')}

                />
              </>
            )
          }
          return (
            <>
              <MyImage
                src={images.icon.iconFace}
                height='30px'
                width='30px'
                className='rounded-[50%] cursor-pointer hover:scale-110'
                onClick={() => viewExternal('https://www.facebook.com/profile.php?id=100080400793331')}
              />

              <MyImage
                src={images.icon.iconGithub}
                height='30px'
                width='30px'
                className='rounded-[50%] cursor-pointer hover:scale-110'
                onClick={() => viewExternal('https://github.com/CongSofwareEngineer')}

              />
            </>
          )
        }}

      </Media>
    )
  }
  return (
    <div ref={ref} className='w-full flex flex-col md:flex-row justify-between items-center md:h-[90vh] '>
      <div className='h-9 md:h-[60%]  flex md:flex-col w-full md:w-7 items-center gap-3 max-h-[500px] '>
        <div className='flex-1 h-[2px] md:h-auto md:w-[2px] bg-blue-600'/>

        {renderInfo()}
        <div className='flex-1 h-[2px] md:h-auto md:w-[2px] bg-blue-600'/>
      </div>
      <div className='w-[50%] md:w-auto flex flex-1 justify-center items-center relative h-[500px] md:h-full mt-10 md:mt-0 '>
        <MyImage
          src={images.avatar}
          height='auto'
          width='85%'
          className='rounded-[50%]'
        />
      </div>

      {renderContent()}
    </div>
  )
}

export default Banner
