import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarLinks({ link, icon, badge }) {
  return (
    <NavLink className="__nav-icon" to={link} end>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill __bg-theme">{ badge }</span>
        <i className={icon}></i>
    </NavLink>
  )
}

export default NavbarLinks