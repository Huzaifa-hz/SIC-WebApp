import React from 'react'
import './AboutUs.css'
import ContentBox from '../components/AboutUsBox'
import ContentArray from '../assets/AboutUsContent'


function AboutUs() {
  return (
    <div className='aboutus'>
        {
          ContentArray.map((content)=>{
            return <ContentBox className='mybox' key={content.id} heading={content.heading} description={content.description}/>
          })
        }

      
    </div>
  )
}

export default AboutUs
