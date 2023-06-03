import React from 'react'
import './AboutUsBox.css'

function AboutUsBox(props) {
  return (
    <div  className='box'>
        <h2 className='heading'>{props.heading}</h2>
        <p className='description'>{props.description}</p>
     </div>
  )
}

export default AboutUsBox;

