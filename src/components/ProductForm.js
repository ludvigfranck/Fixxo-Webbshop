import React, { useState } from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import ProductDetailsLinks from './ProductDetailsLinks'

function ProductForm({init, item}) {
const { incrementQuantity } = useShoppingCart()
const [showColor, setShowColor] = useState(false)
const [count, setCount] = useState(init)

const toggleColor = () => {
  setShowColor(current => !current)
}

const increment = () => {
  setCount(current => current + 1)
}

const decrement = () => {
  setCount(current => current - 1)
}

const handleSubmit = (e) => {
  e.preventDefault()
}

/*
Fick inte till så att prduktens quantity läggs till i ShoppingCart men det funkar 
att lägga till en product. 
Färg och size är likadant, man kan välja men inget händer när man submittar. 
*/

return (
  <div className="product-form">
    <form onSubmit={handleSubmit}>
      <h5>Size:</h5>
      <div className="size">
        <ul className='size-list'>
          <li>
            <input type="checkbox" id="small" name="small" value="small"></input>
            <label htmlFor="small">S</label>
          </li>
          <li>
            <input type="checkbox" id="medium" name="medium" value="medium"></input>
            <label htmlFor="medium">M</label>
          </li>
          <li>
            <input type="checkbox" id="large" name="large" value="large"></input>
            <label htmlFor="large">L</label>
          </li>
          <li>
            <input type="checkbox" id="x-large" name="x-large" value="x-large"></input>
            <label htmlFor="x-large">XL</label>
          </li>
        </ul>
      </div>

      <h5>Color:</h5>
      <div className="color">
        <div className="color-content">
          <button onClick={toggleColor} className="dropdown-btn" type="button">
            Choose an Color
          </button>
          {showColor && (
          <div className="color-box">
            <span>
              <input type="checkbox" id="beige" name="beige" value="beige"></input>
              <label htmlFor="beige"></label>
            </span>
            <span>
              <input type="checkbox" id="red" name="red" value="red"></input>
              <label htmlFor="red"></label>
            </span>
            <span>
              <input type="checkbox" id="blue" name="blue" value="blue"></input>
              <label htmlFor="blue"></label>
            </span>
            <span>
              <input type="checkbox" id="green" name="green" value="green"></input>
              <label htmlFor="green"></label>
            </span>
          </div>
          )}
        </div>
      </div>

      <h5>Qty:</h5>
      <div className="submit">
        <div className="quantity-box">
          <button onClick={() => increment()}>+</button>
            <span className="quantity" data-testid="count">{count}</span>
          <button onClick={() => decrement()}>-</button>
        </div>
        <button onClick={() => incrementQuantity({articleNumber: item.articleNumber, product: item})} type="submit" className="submit-btn">ADD TO CART</button>
      </div>

      <h5>Share:</h5>
      <div className="share-links">
        <ul className="share-list">
          <ProductDetailsLinks link="https://facebook.com" icon="fa-brands fa-facebook-f" />
          <ProductDetailsLinks link="https://instagram.com" icon="fa-brands fa-instagram" />
          <ProductDetailsLinks link="https://twitter.com" icon="fa-brands fa-twitter" />
          <ProductDetailsLinks link="https://google.com" icon="fa-brands fa-google" />
          <ProductDetailsLinks link="https://linkedin.com" icon="fa-brands fa-linkedin" />
        </ul>
      </div>
    </form> 
  </div>
)
}

export default ProductForm