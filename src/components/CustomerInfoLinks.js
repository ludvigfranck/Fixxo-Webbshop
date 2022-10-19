import React from 'react'

function CustomerInfoLinks({ icon, title }) {
  return (
    <div className="__customer-info-box">
        <div className="__customer-info-icon">
            <i className={icon}></i>
        </div>
        <h1 className="__customer-info-title">{title}</h1>
        <p className="__customer-info-text">Village did removed enjoyed <br /> explain talking.</p>
    </div>
  )
}

export default CustomerInfoLinks