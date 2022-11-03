import React from 'react'
import { NavLink } from 'react-router-dom'

function SaleCard({product}) {

    const addToWishList = (e) => {
        console.log("added to wish list")
      }
    
      const addToCompare = (e) => {
        console.log("added to compare")
      }
    
      const addToCart = (e) => {
        console.log("added to shopping cart")
      }
  
return (
    <div className="col">
        <div className="__sale-card">
            <div className="__sale-card-img">
                <img src={product.img} alt={product.name} />
                <div className="__sale-card-menu d-xl-none">
                    <button onClick={addToWishList} className="__sale-menu-link"><i className="fa-regular fa-heart"></i></button>
                    <button onClick={addToCompare} className="__sale-menu-link"><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={addToCart} className="__sale-menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>
                <NavLink to={`/products/${product.name.toLowerCase().replace(/ /gi, "-")}`} className="__sale-btn-card-theme d-xl-none">
                    QUICK VIEW
                </NavLink>
            </div>
            <div className="__sale-card-body">
                <p className="__sale-card-category">{product.category}</p>
                <h5 className="__sale-card-title">{product.name}</h5>
                <p className="__sale-card-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </p>
                <p className="__sale-card-price">{product.price}</p>
            </div>
        </div>
    </div>
  )
}

export default SaleCard