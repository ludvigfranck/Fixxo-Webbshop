import React from 'react'
import ImgLeft from '../assets/images/svg/showcaseLeft.svg'
import ImgRight from '../assets/images/svg/showcaseRight.svg'

const Showcase = () => {
  return (
    <section className="container __showcase d-flex justify-content-between align-items-center">
        <img className="__img-left" src={ImgLeft} alt="placeholder left" />
        <div className="__showcase-body">
        <h1>SALE UP</h1>
            <h1>To 50% Off</h1>
            <p>Online shopping free home delivery over $100</p>
            <a className="__btn-theme" href="#">
                <span className="__btn-theme-left"></span>
                SHOP NOW
                <span className="__btn-theme-right"></span>
            </a>
        </div>
        <img className="__img-right" src={ImgRight} alt="placeholder right" />
    </section>
  )
}

export default Showcase