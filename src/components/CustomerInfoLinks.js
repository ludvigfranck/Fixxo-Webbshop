import React from 'react'
import { NavLink } from 'react-router-dom'

function CustomerInfoLinks({ link, icon, title }) {
  return (
    <div className="__customer-info-box">
        <NavLink className="__customer-info-icon" to={link}>
            <i className={icon}></i>
        </NavLink>
        <h1 className="__customer-info-title">{title}</h1>
        <p className="__customer-info-text">Village did removed enjoyed <br /> explain talking.</p>
    </div>
  )
}

export default CustomerInfoLinks