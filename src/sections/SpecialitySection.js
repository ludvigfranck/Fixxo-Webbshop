import React from 'react'
import { NavLink } from 'react-router-dom'

function SpecialitySection() {
  return (
    <section className="__speciality">
        <h1>Our Speciality</h1>
        <div className="container">
            <div className="__speciality-box">
                <div className="__speciality-box-content">
                    <h2>Track Your Order</h2>
                    <NavLink>Get started</NavLink>
                </div>
                <div className="__gray-box"></div>
            </div>
            <div className="__speciality-box">
                <div className="__speciality-box-content">
                    <h2>Make a Return</h2>
                    <NavLink>Get started</NavLink>
                </div>
                <div className="__gray-box"></div>
            </div>
            <div className="__speciality-box">
                <div className="__speciality-box-content">
                    <h2>Request a Price <br /> Adjustment</h2>
                    <NavLink>Get started</NavLink>
                </div>
                <div className="__gray-box"></div>
            </div>
        </div>
    </section>
  )
}

export default SpecialitySection