import React from 'react'
import BannerImg from '../assets/images/img/bannerImgRight.jpg'

function BannerRight() {
  return (
    <div className="__banner-right">
        <div className="__banner-right-content">
            <h1>Let's Be <br />Conscious</h1>
            <a className="__btn-theme" href="#">
                <span class="__btn-theme-left"></span>
                SHOP NOW
                <span className="__btn-theme-right"></span>
            </a>
        </div>
        <img src={BannerImg} />
    </div>
  )
}

export default BannerRight