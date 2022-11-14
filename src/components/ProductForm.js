import React, { useEffect, useState } from 'react'
import ProductDetailsLinks from './ProductDetailsLinks'

function ProductForm() {
const [showColor, setShowColor] = useState(false)
const [count, setCount] = useState(0)

const toggleColor = () => {
  setShowColor(current => !current)
}

const incrementQuantity = () => {
  setCount(count + 1)
}

const decrementQuantity = () => {
  setCount(count -1)
}

useEffect(() => {
  setCount(count)
}, [setCount])

  return (
    <form>
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
          <button onClick={incrementQuantity}>+</button>
            <span className="quantity">{count}</span>
          <button onClick={decrementQuantity}>-</button>
        </div>
        <button type="submit" className="submit-btn">ADD TO CART</button>
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
  )
}

export default ProductForm