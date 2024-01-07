import TitleComponent from '@/components/TitleComponent4'
import React from 'react'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import styled from 'styled-components'
import MyImage from '@/components/MyImage'
import { images } from '@/config/images'
import { viewExternal } from '@/utils/function'
import HomeIcon from '@mui/icons-material/Home'
import EmailIcon from '@mui/icons-material/Email'

const ContainerItem = styled.div`
  border-radius: 16px;
  padding: 10px;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 12px;
  border: 1px solid rgba(255,255,255,0.5);
`

const Icon = styled(MyImage)`
    width: 50px;
    height: auto;
    margin: auto;
`
const IconSub = styled(MyImage)`
    width: auto;
    height: 20px !important; 
`
const ContactMe = () => {
  const renderIcon = (icon) => {
    return (
      <div className='p-2 rounded-[50%]' style={{ background: '#637a9a' }}>
        {icon}
      </div>
    )
  }

  return (
    <div>
      <TitleComponent title={'Contact'} icon={<ContactMailIcon />} />
      <div className='mb-5' />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
        <ContainerItem>
          <div className='m-auto'>
            {renderIcon(<HomeIcon className='w-full' />)}
          </div>
          <div className='flex-1'>
            <p className='text-title'>
            MY ADDRESS
            </p>
            <div>
            HỒ Chí Minh
            </div>
          </div>
        </ContainerItem>

        <ContainerItem>
          <div className='m-auto'>
            {renderIcon(<HomeIcon />)}
          </div>
          <div className='flex-1'>
            <p className='text-title'>
            SOCIAL PROFILES
            </p>
            <div className='flex items-center'>
              <IconSub src={images.icon.iconFace} className='mr-2'/>
              <IconSub src={images.icon.iconGithub}/>
            </div>
          </div>
        </ContainerItem>

        <ContainerItem>
          <div className='m-auto'>
            {renderIcon(<EmailIcon />)}
          </div>
          <div className='flex-1'>
            <p className='text-title'>
            EMAIL ME
            </p>
            <a href='#' className='hover:underline' onClick={() => viewExternal('https://mail.google.com/')}>
            hodiencong2000@gmail.com
            </a>
          </div>
        </ContainerItem>

        <ContainerItem>
          <div className='m-auto'>
            {renderIcon(<HomeIcon />)}
          </div>
          <div className='flex-1'>
            <p className='text-title'>
            EMAIL ME
            </p>
            <a href='#' onClick={() => viewExternal('https://mail.google.com/')}>
            hodiencong2000@gmail.com
            </a>
          </div>
        </ContainerItem>

      </div>
    </div>
  )
}

export default ContactMe
