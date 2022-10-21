import React from 'react'
import { NavLink } from 'react-router-dom'
import BannerImg from '../assets/images/img/bannerImgRight.jpg'

function BannerRight() {
  return (
    <div className="__banner-right">
        <div className="__banner-right-content">
            <h1>Let's Be <br />Conscious</h1>
            <NavLink className="__btn-theme" href="#">
                <span className="__corner-left"></span>
                SHOP NOW
                <span className="__corner-right"></span>
            </NavLink>
        </div>
        <img src={BannerImg} />
    </div>
  )
}

export default BannerRight