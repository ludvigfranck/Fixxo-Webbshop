import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavbarLinks from '../components/NavbarLinks'
import { useShoppingCart } from '../contexts/ShoppingCartContext'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { cartQuantity } = useShoppingCart()


  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="__navbar">
      <div className="container">
      <NavLink className="__logo" to="/" end>Fixxo.</NavLink>
      <div className={`__nav-links ${showMenu ? "d-grid" : ""}`}>
        <NavLink className="__nav-link" to="/" end>Home</NavLink>
        <NavLink className="__nav-link" to="/category" end>Category</NavLink>
        <NavLink className="__nav-link" to="/products" >Products</NavLink>
        <NavLink className="__nav-link" to="/contacts" end>Contacts</NavLink>
      </div>
      <div className="__nav-icon-links">
        <NavbarLinks link="/search" icon="fa-regular fa-magnifying-glass" badge="" />
        <NavbarLinks hideOnMobile={true} link="/compare" icon="fa-regular fa-code-compare" badge="" />
        <NavbarLinks hideOnMobile={true} link="/wishlist" icon="fa-regular fa-heart" badge="" />
        <button className="__nav-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartQuantity}</span>
          <i className="fa-regular fa-bag-shopping"></i>
        </button>
        <button onClick={toggleMenu} className="__nav-icon __btn-nav-icon d-xl-none"><i className="fa-regular fa-bars"></i></button>
      </div>
      </div>
    </nav>
  )
}

export default Navbar