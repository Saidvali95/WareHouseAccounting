import React from 'react'
import logo from '../png.png'
import { NavLink } from 'react-router-dom'
import {SlBasketLoaded} from 'react-icons/sl'

const Navbar = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <div className = 'navbarStyle'>
      <div className='logo'>
      <img src={logo}></img>
      </div>
      <div className = 'leftNavbarStyle'>
      <div className='lastUpdate'>
        <span>Last stock update: {date}</span>
      </div>
      <div className='loadData'>
        <NavLink to= '/loadData'>
          <SlBasketLoaded/>
          <span className='ld'>Load Data</span>
        </NavLink>
      </div>
      </div>
      <div className='rightNavbarStyle'>
      <div className='logout'>
      <span>
        Logout    
       </span>
      </div>
      <div className='userpage'>
          <span>User: </span>
          <NavLink to= '/userPage'>
            Peter
        </NavLink>
      </div>
    </div>
    </div>
  )
}

export default Navbar