import React from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

function ProductCard({item}) {
  const { incrementQuantity } = useShoppingCart()

  return (
    <div className="col">
      <div className="card">
      <div className="card-img">
          <img src={item.imageName} alt={item.name} />
          <div className="card-menu d-xl-none">
            <button className="menu-link"><i className="fa-regular fa-heart"></i></button>
            <button className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
            <button onClick={() => incrementQuantity({articleNumber: item.articleNumber, product: item})} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
          </div>
          <NavLink to={`/products/${item.name.toLowerCase().replace(/ /gi, "-")}`} className="__btn-theme btn-card-theme d-xl-none">
            <span className="__corner-left"></span>
            <span className="__corner-right"></span>
            QUICK VIEW
          </NavLink>
        </div>
        <div className="card-body">
          <p className="card-category">{item.category}</p>
          <h5 className="card-title">{item.name}</h5>
          <p className="card-rating">
          <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
          </p>
          <p className="card-price">{item.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard