import React from 'react'
import Logo from '../assets/logo-final-1.png'
import './HomePage.css'
import Navbar from '../components/Navbar'
import BasicButton from '../components/BasicButton.jsx'
import { Router,Route }  from 'react-router-dom'
import Collaboration from '../components/Collaboration.jsx'
import Carousel from '../components/Carousel'
import ImgArray from '../assets/ImgArray'

function HomePage() {
    
  return (
<div className='homepage'>
    
  {/* <Carousel images={ImgArray} interval={3000}/> */}
    {/* <div  className='container-buttons'>
      <BasicButton text='Events'/>
      <BasicButton text='About Us'/>
      <BasicButton text='Join Us'/>  
    </div> */}

     
      
    </div>
  )
}

export default HomePage
