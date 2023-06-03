import React from 'react'
import './JoinUs.css'
import Insta from '../assets/insta-logo.png'
import Linkedin from '../assets/linkedin.png'

function JoinUs() {
  return (
    <div className='join-us'>
      <div className='socialMedia'>
        <a className='link' href="https://instagram.com/sic_rv?igshid=MmJiY2I4NDBkZg==" target='_blank'><img className='image' src={Insta} alt="Instagram handle" /></a>
        <a className='link' href="https://www.linkedin.com/company/startup-ignition-cell-sic/" target='_blank'><img className='image' src={Linkedin} alt="Instagram handle" /></a>
        <a className='link' href="https://www.linkedin.com/company/startup-ignition-cell-sic/" target='_blank'><img className='image' src={Linkedin} alt="Instagram handle" /></a>
      </div>
     
    </div>
  )
}

export default JoinUs
