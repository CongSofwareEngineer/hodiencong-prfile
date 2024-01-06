import TitleComponent from '@/components/TitleComponent4'
import React from 'react'
import ConstructionIcon from '@mui/icons-material/Construction'
import styled, { keyframes } from 'styled-components'
import MyImage from '@/components/MyImage'
import { images } from '@/config/images'
const rotate = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
const ContainerItem = styled.div`
    border-radius: 24px;
    display: flex;
    align-items: center;
    width: 100%; 
    padding: 10px;  
    gap :5px ;
    background-color: #637a9a; 
    cursor: pointer;
    /* animation: ${rotate} ${props => props.seconds ?? 2}s linear ; */
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    height: 55px;

`

const IconItem = styled(MyImage)`
   width: 40px !important;
   height: 40px !important; 
   /* margin-left: 10px; */
   border-radius: 50%;
`
const Skills = () => {
  const listData = [

    {
      icon: images.iconTech.iconHtml,
      text: 'Html'
    },
    {
      icon: images.iconTech.iconJs,
      text: 'Javascript'
    },
    {
      icon: images.iconTech.iconReactjs,
      text: 'Reactjs'
    },
    {
      icon: images.iconTech.iconCss,
      text: 'Css'
    },
    {
      icon: images.iconTech.iconFirebase,
      text: 'Firebase'
    },
    {
      icon: images.iconTech.iconReactNative,
      text: 'React native'
    },
    {
      icon: images.iconTech.iconNodejs,
      text: 'Nodejs (basic)'
    },
    {
      icon: images.iconTech.iconRestFullApi,
      text: 'Rest full api'
    },
    {
      icon: images.iconTech.iconScss,
      text: 'Scss'
    },
    {
      icon: images.iconTech.iconSql,
      text: 'Sql'
    },
    {
      icon: images.iconTech.iconTailwincss,
      text: 'TailWind'
    }

  ]
  return (
    <div className="w-full" >
      <TitleComponent icon={<ConstructionIcon />} />
      <h2 className='flex gap-2 text-tile my-3' data-aos="fade-right" >
        <span>
          Education &
        </span>
        <span className='text-blue-600'>
          Experience
        </span>
      </h2>
      <div data-aos="zoom-in"className='grid gap-6 grid-cols-2 md:grid-cols-3 ml-0 md:ml-[10%]'>
        {
          listData.map((item, index) => {
            return (
              <ContainerItem key={index}>
                <IconItem src={item.icon}/>
                <span>
                  {item.text}
                </span>
              </ContainerItem>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills
