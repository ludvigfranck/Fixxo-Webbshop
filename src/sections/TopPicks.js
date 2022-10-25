import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import FlashsaleCards from '../components/FlashsaleCards'

function TopPicks() {
  
    const [TopPicks, setTopPicks] = useState([
        { id: 9, name: "Males T-shirts", category: "Male", price: "$17.00", rating: 5, img: "https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?cs=srgb&dl=pexels-ylanite-koppens-934069.jpg&fm=jpg&_gl=1*9t62hq*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDcyOS4wLjAuMA.."},
        { id: 10, name: "Males T-shirts", category: "Male", price: "$17.00", rating: 5, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?cs=srgb&dl=pexels-godisable-jacob-871494.jpg&fm=jpg&_gl=1*1qr5hwf*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDc1Mi4wLjAuMA.."},
        { id: 11, name: "Males T-shirts", category: "Male", price: "$17.00", rating: 5, img: "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?cs=srgb&dl=pexels-ylanite-koppens-934063.jpg&fm=jpg&_gl=1*7v51xm*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDg1MC4wLjAuMA.."},
        { id: 12, name: "Males T-shirts", category: "Male", price: "$17.00", rating: 5, img: "https://images.pexels.com/photos/1578997/pexels-photo-1578997.jpeg?cs=srgb&dl=pexels-dejan-krstevski-1578997.jpg&fm=jpg&_gl=1*k6543w*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDc3MS4wLjAuMA.."}
    ])

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
                    <FlashsaleCards products={TopPicks} />
                </div>
                <button onClick={toggleTopPicksCards} className="__top-picks-btn d-xl-none"><i className="fa-regular fa-bars"></i></button>
            </div>
        </div>
    </section>
  )
}

export default TopPicks