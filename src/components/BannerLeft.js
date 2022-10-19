import React from 'react'
import BannerImg from '../assets/images/img/bannerImgLeft.jpg'

function BannerLeft() {
  return (
    <div className="__banner-left">
        <img src={BannerImg} />
        <div className="__banner-left-content">
            <h1>Pamela Reif's <br/> Top Picks</h1>
            <a className="__btn-theme" href="#">
                <span className="__btn-theme-left"></span>
                SHOP NOW
                <span className="__btn-theme-right"></span>
            </a>
        </div>
    </div>
  )
}

export default BannerLeft