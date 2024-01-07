import TitleComponent from '@/components/TitleComponent4'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info'
import styled from 'styled-components'
const ULC = styled.ul`
  list-style-type: circle;
  font-size: 18px;
  li{
    margin-bottom: 10px;
  }
  margin-left: 15px;
`
const About = ({ ref }) => {
  const renderContact = (name, text) => {
    return (
      <div className="flex gap-2">
        <span className="text-blue-600 ">{`${name} :`}</span>
        <span>{text}</span>
      </div>
    )
  }
  return (
    <div className="w-full" ref={ref}>
      <TitleComponent icon={<InfoIcon />} />
      <p
        data-aos="fade-up-right"
        className="text-title font-bold flex w-full gap-1"
      >
        Know Me
        <span className="text-blue-500 ml-1">More</span>
      </p>
      <div className="flex flex-col ml-0 md:ml-[10%] gap-2">

        <div className="text-title text-blue-600">Introduce ?</div>

        <div className="text-title font-semibold my-2">
          I'm Công , a front end Developer
        </div>
        <ULC>
          <li>
            My name is Sang and I work as a Front End Developer. Let me know if
            you need any assistance in that area.
          </li>
          <li>First, learn the rules then study the literature.</li>
          <li>
            I'm interested in front-end development in particular and
            programming in general.
          </li>
          <li>
            I have determination and effort in my life and commitment to my
            work.
          </li>
        </ULC>
        <div className="my-4 w-full h-[2px] bg-slate-300" />
        <div className="grid  md:grid-cols-2">
          {renderContact('Name', 'Công')}
          {renderContact('Phone', '0392225405')}
          {renderContact('Age', new Date().getFullYear() - 2000)}
          {renderContact('Gmail', 'hodiencong2000@gmail.com')}
        </div>
      </div>
    </div>
  )
}

export default About
