import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../components/ProductCard'



function Flashsale({items = []}) {

  const [showCards, setShowCards] = useState()

  const toggleCards = () => {
    setShowCards(!showCards)  
  }


  return (
    <section className="__flashsale">
      <div className="container">
        <div className="__flashsale-box">
          <h1>FLASHSALE</h1>
          <NavLink className="__btn-theme" href="#">
              <span className="__corner-left"></span>
                SHOP NOW
              <span className="__corner-right"></span>
          </NavLink>
        </div>
        <div className="__flashsale-content">
          <div className={`__flashsale-cards ${showCards ? "d-grid" : ""}`}>
          {
            items.map(product => <ProductCard key={product.articleNumber} item={product} />)
          }
          </div>
          <button onClick={toggleCards} className="__flashsale-btn d-xl-none"><i className="fa-regular fa-bars"></i></button>
        </div>
      </div>
    </section>
  )
}

export default Flashsale