import React from 'react'
import logo from '../images/airbnb.svg'
import '../style.css'
const Navbar = () => {
  return (
    <nav className='nav'>
      <img src={logo} alt="airbnb" className="nav--logo" />
      
      <ul className='nav--links'>
        <li>Home</li>
        <li>Travel</li>
        <li>Booking</li>
        <li>Service</li>
        <li>Career</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar