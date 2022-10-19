import React from 'react'

function Card() {
  return (
    <div className="col">
        <div className="__card">
            <div className="__img">
                <div className="__card-menu">
                    <a href="#"><i className="fa-regular fa-heart"></i></a>
                    <a href="#"><i className="fa-regular fa-arrows-repeat"></i></a>
                    <a href="#"><i className="fa-regular fa-bag-shopping"></i></a>
                </div>
                <a className="__btn-theme __btn-card-theme" href="#">
                    <span className="__btn-theme-left btn-card-theme-left"></span>
                    <span className="__btn-theme-right btn-card-theme-right"></span>
                    QUICK VIEW
                </a>
            </div>
            <div className="__card-body">
                <p className="__card-category">Category</p>
                <h5 className="__card-title">Modern Black Blouse</h5>
                <p className="__card-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </p>
                <p className="__card-price">$35.00</p>
            </div>
        </div>
    </div>
  )
}

export default Card