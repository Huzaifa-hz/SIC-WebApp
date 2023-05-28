import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
       

        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/events' className='nav-link'>Events</Link>
        <Link to='/about' className='nav-link'>About Us</Link>
        <Link to='/join' className='nav-link'>Join Us</Link>
    </div>
  )
}

export default Navbar

