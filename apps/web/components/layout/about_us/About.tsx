import React from 'react'
import AboutHeader from './AboutHeader'
import NavBar from '@/components/ui/NavBar'
import Story from './Story'
import Believe from './Believe'
import OurApproach from '@/components/ui/OurApproach'
import Partner from './Partner'
import DinelToday from './DinelToday'
import PartofStory from './PartofStory'
import DinelGroupBv from '@/components/ui/DinelGroupBv'

const About = () => {
  return (
    <div>
        <NavBar />
        <AboutHeader />
        <Story />
        <Believe/>
        <OurApproach/>
        <Partner/>
        <DinelToday/>
        <PartofStory/>
        <DinelGroupBv/>
    </div>
  )
}

export default About