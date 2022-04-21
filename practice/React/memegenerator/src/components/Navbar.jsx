import React from 'react'
import logo from '../image/meme.svg'
export default function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt=""/>
      <h3>Memathon</h3>
    </div>
  )
}
