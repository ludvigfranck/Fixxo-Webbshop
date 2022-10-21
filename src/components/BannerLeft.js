import React from 'react'
import { NavLink } from 'react-router-dom'
import BannerImg from '../assets/images/img/bannerImgLeft.jpg'

function BannerLeft() {
  return (
    <div className="__banner-left">
        <img src={BannerImg} />
        <div className="__banner-left-content">
            <h1>Pamela Reif's <br/> Top Picks</h1>
            <NavLink className="__btn-theme" href="#">
                <span className="__corner-left"></span>
                SHOP NOW
                <span className="__corner-right"></span>
            </NavLink>
        </div>
    </div>
  )
}

export default BannerLeft