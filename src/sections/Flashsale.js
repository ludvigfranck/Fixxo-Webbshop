import React, { useState } from 'react'
import FlashsaleCards from '../components/FlashsaleCards'
import { NavLink } from 'react-router-dom'



function Flashsale() {
  
  const [Flashsale, setFlashsale] = useState([
    { id: 5, name: "Modern skirt", category: "Fashion", price: "$20.00", rating: 5, img: "https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?cs=srgb&dl=pexels-ylanite-koppens-934069.jpg&fm=jpg&_gl=1*9t62hq*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDcyOS4wLjAuMA.."},
    { id: 6, name: "Modern skirt", category: "Fashion", price: "$20.00", rating: 5, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?cs=srgb&dl=pexels-godisable-jacob-871494.jpg&fm=jpg&_gl=1*1qr5hwf*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDc1Mi4wLjAuMA.."},
    { id: 7, name: "Modern skirt", category: "Fashion", price: "$20.00", rating: 5, img: "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?cs=srgb&dl=pexels-ylanite-koppens-934063.jpg&fm=jpg&_gl=1*7v51xm*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDg1MC4wLjAuMA.."},
    { id: 8, name: "Modern skirt", category: "Fashion", price: "$20.00", rating: 5, img: "https://images.pexels.com/photos/1578997/pexels-photo-1578997.jpeg?cs=srgb&dl=pexels-dejan-krstevski-1578997.jpg&fm=jpg&_gl=1*k6543w*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDc3MS4wLjAuMA.."}
  ])

  const [showCards, setShowCards] = useState()

  const toggleCards = () => {
    setShowCards(!showCards)  
  }

  return (
    <section className="__flashsale">
      <div className="container">
      <div className="__flashsale-box">
        <h1>2 FOR USD $29</h1>
        <NavLink className="__btn-theme" href="#">
            <span className="__corner-left"></span>
            SHOP NOW
            <span className="__corner-right"></span>
        </NavLink>
      </div>
      <div className="__flashsale-cards-container">
      <button onClick={toggleCards} className="__show-cards-icon d-xl-none"><i className="fa-regular fa-bars"></i></button>
        <div className={`__flashsale-cards ${showCards ? "d-grid" : "d-none"}`}>
          <FlashsaleCards products={Flashsale} />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Flashsale