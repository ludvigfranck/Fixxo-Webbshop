import React from 'react'
import { NavLink } from 'react-router-dom'

function DiscountSection() {
  return (
    <section className="__discount">
        <div className="container">
            <h1>Up to 70% off*</h1>
            <p>Women's, Men's & Kids' Winter Fashion</p>
            <NavLink className="__btn-theme" href="#">
              <span className="__corner-left"></span>
                SHOP NOW
              <span className="__corner-right"></span>
          </NavLink>
        </div>
    </section>
  )
}

export default DiscountSection