import React, { useState } from 'react'

function ProductForm() {
  const [color, setColor] = useState(false)
  
  const toggleColor = () => {
    setColor(!color)
  }

  return (
    <form>
      <div className="size">
        <h5>Size:</h5>
        <ul className='size-list'>
          <li>
            <input type="checkbox" id="small" name="small" value="small"></input>
            <label for="small">S</label>
          </li>
          <li>
            <input type="checkbox" id="medium" name="medium" value="medium"></input>
            <label for="medium">M</label>
          </li>
          <li>
            <input type="checkbox" id="large" name="large" value="large"></input>
            <label for="large">L</label>
          </li>
          <li>
            <input type="checkbox" id="x-large" name="x-large" value="x-large"></input>
            <label for="x-large">XL</label>
          </li>
        </ul>
      </div>

      <div className="color">
        <h5>Color:</h5>
        <button onClick={toggleColor} class="dropdown-btn" type="button">
          Choose an Color
        </button>
        <div className="color-box d-none">
          <input type="color" id="color"></input>
        </div>
      </div>

      <div className="submit">
        <div className="quantity-box">
          <button>-</button>
          <input type="number" id="quantity" name="quantity" value="quantity"></input>
          <button>+</button>
        </div>
        <div className="submit-box">
          <button type="submit">ADD TO CART</button>
        </div>
      </div>
    </form>
  )
}

export default ProductForm