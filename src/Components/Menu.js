import React from 'react'
import * as HiIcons2 from 'react-icons/hi2'
import * as HiIcons from 'react-icons/hi'
import * as GoIcons from 'react-icons/go'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menu'>
      <div className='menuStyle'>
       <div className='mainStyle'>
        <ul>
        <li><NavLink to = '/' activeClassName='active'><HiIcons2.HiOutlineHome/>Главная</NavLink></li>
        </ul>

        </div> 
       <div className='otherMenu'>
        <ul>
       <li><NavLink to = '/forecast' activeClassName='active'><HiIcons2.HiOutlineDocument/>Forecast</NavLink></li>
       <li><NavLink to = '/catalog' activeClassName='active'><HiIcons.HiOutlineDatabase/>Catalog</NavLink></li>
       <li><NavLink to = '/sales' activeClassName='active'><GoIcons.GoChecklist/>Sales</NavLink></li>
       </ul>
       </div>
       </div>
    </div>
  )
}

export default Menu