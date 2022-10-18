import React from 'react'

const Navbar = () => {
  return (
    <nav className="__navbar __gradient-gray d-flex align-items-center">
        <div className="container d-flex justify-content-between"> 
            <div className="__logo">
                Fixxo.
            </div>
            <div className="__nav-links">
                <a className="__active" href="#">Home</a>
                <a href="#">Category</a>
                <a href="#">Products</a>
                <a href="#">Contact</a>
            </div>
            <div className="__nav-icon-links">
                <a href="#">
                    <i className="fa-regular fa-magnifying-glass"></i>
                </a>
                <a href="#">
                    <i className="fa-regular fa-arrows-repeat"></i>
                </a>
                <a href="#">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">1</span>
                    <i class="fa-regular fa-heart"></i>
                </a>
                <a href="#">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">3</span>
                    <i className="fa-regular fa-bag-shopping"></i>
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar