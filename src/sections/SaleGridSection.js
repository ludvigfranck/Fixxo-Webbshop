import React, { useState, useContext } from 'react'
import SaleCards from '../components/SaleCards'

function SaleGridSection() {


  const [showCardsLP, setShowCardsLP] = useState(false)
  const [showCardsBSP, setShowCardsBSP] = useState(false)
  const [showCardsTRP, setShowCardsTRP] = useState(false)

  const toggleCards = (e) => {
    const card = e.target

    switch (card.id) {
      case '__toggle-LP':
        setShowCardsLP(!showCardsLP)
        toggleTextChange(e)
        break;

      case '__toggle-BSP':
        setShowCardsBSP(!showCardsBSP)
        toggleTextChange(e)
        break;

      case '__toggle-TRP':
        setShowCardsTRP(!showCardsTRP)
        toggleTextChange(e)
        break;
    }
  }

  const toggleTextChange = (e) => {
    switch (e.target.innerText) {
      case 'Show More':
        e.target.innerText = 'Hide'
        break;

      default:
        e.target.innerText = 'Show More'
    }
  }

  return (
    <section className="__sale-grid">
      <div className="container">
        <div className="__sale-grid-products">
          <h1>Latest Products</h1>
          <div className={`__sale-grid-cards ${showCardsLP ? "d-flex" : ""}`}>
            <SaleCards />
          </div>
          <button onClick={toggleCards} className="__sale-grid-btn d-lg-none" id="__toggle-LP">
            Show More
          </button>
        </div>

        <div className="__sale-grid-products">
          <h1>Best Selling Product</h1>
          <div className={`__sale-grid-cards ${showCardsBSP ? "d-flex" : ""}`}>
            <SaleCards />
          </div>
          <button onClick={toggleCards} className="__sale-grid-btn d-lg-none" id="__toggle-BSP">
            Show More
          </button>
        </div>

        <div className="__sale-grid-products">
          <h1>Top Reacted Product</h1>
          <div className={`__sale-grid-cards ${showCardsTRP ? "d-flex" : ""}`}>
            <SaleCards />
          </div>
          <button onClick={toggleCards} className="__sale-grid-btn d-lg-none" id="__toggle-TRP">
            Show More
          </button>
        </div>
      </div>
    </section>
  )
}

export default SaleGridSection