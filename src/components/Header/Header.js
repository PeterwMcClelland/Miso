import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'

function Header() {
  return (
    <div>
      <header className='header'>
        
        <NavLink className='header-icon' to="/heropage"> MISO </NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </header>
    </div>
  )
}

export default Header
