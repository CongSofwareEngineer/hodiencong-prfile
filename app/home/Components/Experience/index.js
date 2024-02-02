import TitleComponent from '@/components/TitleComponent4'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import ConstructionIcon from '@mui/icons-material/Construction'

export default function Experience ({ ref }) {
  const renderContent = () => {
    return (
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2021 - Present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold">Work in company Bacoor Viet Nam</h3>
          <h4 className="vertical-timeline-element-subtitle">Font-end React</h4>
          <p className='opacity-80'>
        + Build UI
            <br />
          + Rest full API
            <br/>
          + Work web3 (smart contract - web3js, etherjs): Element chain Solana, Chain EVM,..
            <br/>
          + Element modal 3d (threejs)
            <br/>
          + ElementRedux
            <br/>
          + Element Notification Firebase
            <br/>
          + Element call service api opensea, ankr,..etc
            <br />
          + Element scan and export data in card NFC
            <br />
          + Element server Bot chat and add User in Discord
            <br />
          + Working with Nextjs, Tailwincss, Scss, Firebase...
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold"> Studied at Thu Dau Mot University</h3>
          <h4 className="vertical-timeline-element-subtitle"> </h4>
          <p className='opacity-80'>
        Majoring in software engineering
          </p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      // icon={<StarIcon />}
      /> */}
      </VerticalTimeline>
    )
  }

  return (
    <div ref={ref} className="w-full" >
      <TitleComponent title={'Experience'} className={'Experience'} icon={<ConstructionIcon />} />
      <h2 className='flex gap-2 text-tile my-3 mb-4' data-aos="fade-right" >
        {/* <span>
          Education &
        </span>
        <span className='text-blue-600'>
          Experience
        </span> */}
      </h2>
      {renderContent()}
    </div>
  )
}
