import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

function TopPicks({items = []}) {

    const [showTopPicksCards, setShowTopPicksCards] = useState()

    const toggleTopPicksCards = () => {
        setShowTopPicksCards(!showTopPicksCards)  
      }
    
return (
    <section className="__top-picks">
        <div className="container">
            <div className="__top-picks-box">
                <h1>TOP PICKS</h1>
                <NavLink className="__btn-theme" href="#">
                    <span className="__corner-left"></span>
                    SHOP NOW
                    <span className="__corner-right"></span>
                </NavLink>
            </div>
            <div className="__top-picks-content">
                <div className={`__top-picks-cards ${showTopPicksCards ? "d-grid" : ""}`}>
                {
                    items.map(product => <ProductCard key={product.articleNumber} item={product} />)
                }
                </div>
                <button onClick={toggleTopPicksCards} className="__top-picks-btn d-xl-none"><i className="fa-regular fa-bars"></i></button>
            </div>
        </div>
    </section>
  )
}

export default TopPicks