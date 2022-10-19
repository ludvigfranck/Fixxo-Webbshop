import React from 'react'
import { NavLink } from 'react-router-dom'
import NavbarLinks from './NavbarLinks'


const Navbar = () => {
  return (
    <nav className="__navbar d-flex align-items-center">
        <div className="container d-flex justify-content-between"> 
            <NavLink className="__logo" to="/" end>Fixxo.</NavLink>
            <div className="__nav-links">
                <NavLink className="__nav-link" to="/" end>Home</NavLink>
                <NavLink className="__nav-link" to="/categories" end>Category</NavLink>
                <NavLink className="__nav-link" to="/products" end>Products</NavLink>
                <NavLink className="__nav-link" to="/contacts" end>Contacts</NavLink>
            </div>
            <div className="__nav-icon-links">
                <NavbarLinks link="/search" icon="fa-regular fa-magnifying-glass" badge="" />
                <NavbarLinks link="/compare" icon="fa-regular fa-arrows-repeat" badge="" />
                <NavbarLinks link="/wishlist" icon="fa-regular fa-heart" badge="2" />
                <NavbarLinks link="/shoppingcart" icon="fa-regular fa-bag-shopping" badge="3" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar