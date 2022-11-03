import React, { useState } from 'react'
import LatestProducts from '../components/LatestProducts'

function SaleGridSection() {
  
  const [latestProducts, setLatestProducts] = useState([
    { id: 9, name: "Modern coat", category: "Latest product", price: "$27.00", rating: 5, img: "https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?cs=srgb&dl=pexels-ylanite-koppens-934069.jpg&fm=jpg&_gl=1*9t62hq*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDcyOS4wLjAuMA.."},
    { id: 10, name: "Modern coat", category: "Latest product", price: "$27.00", rating: 5, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?cs=srgb&dl=pexels-godisable-jacob-871494.jpg&fm=jpg&_gl=1*1qr5hwf*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDc1Mi4wLjAuMA.."},
    { id: 11, name: "Modern coat", category: "Latest product", price: "$27.00", rating: 5, img: "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?cs=srgb&dl=pexels-ylanite-koppens-934063.jpg&fm=jpg&_gl=1*7v51xm*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDg1MC4wLjAuMA.."}
  ])

  const [bestSellingProducts, setBestSellingProducts] = useState([
    { id: 12, name: "Modern jacket", category: "Best Selling", price: "$34.00", rating: 5, img: "https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?cs=srgb&dl=pexels-ylanite-koppens-934069.jpg&fm=jpg&_gl=1*9t62hq*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDcyOS4wLjAuMA.."},
    { id: 13, name: "Modern jacket", category: "Best Selling", price: "$34.00", rating: 5, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?cs=srgb&dl=pexels-godisable-jacob-871494.jpg&fm=jpg&_gl=1*1qr5hwf*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDc1Mi4wLjAuMA.."},
    { id: 14, name: "Modern jacket", category: "Best Selling", price: "$34.00", rating: 5, img: "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?cs=srgb&dl=pexels-ylanite-koppens-934063.jpg&fm=jpg&_gl=1*7v51xm*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDg1MC4wLjAuMA.."}
  ])

  const [topReactedProducts, setTopReactedProducts] = useState([
    { id: 15, name: "Modern pants", category: "Top Reacted", price: "$23.00", rating: 5, img: "https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?cs=srgb&dl=pexels-ylanite-koppens-934069.jpg&fm=jpg&_gl=1*9t62hq*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDcyOS4wLjAuMA.."},
    { id: 16, name: "Modern pants", category: "Top Reacted", price: "$23.00", rating: 5, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?cs=srgb&dl=pexels-godisable-jacob-871494.jpg&fm=jpg&_gl=1*1qr5hwf*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDc1Mi4wLjAuMA.."},
    { id: 17, name: "Modern pants", category: "Top Reacted", price: "$23.00", rating: 5, img: "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?cs=srgb&dl=pexels-ylanite-koppens-934063.jpg&fm=jpg&_gl=1*7v51xm*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDg1MC4wLjAuMA.."}
  ])

  const [showCardsLP, setShowCardsLP] = useState()
  const [showCardsBSP, setShowCardsBSP] = useState()
  const [showCardsTRP, setShowCardsTRP] = useState()

  const toggleCardsLP = () => {
    setShowCardsLP(!showCardsLP)
  }

  const toggleCardsBSP = () => {
    setShowCardsBSP(!showCardsBSP)
  }

  const toggleCardsTRP = () => {
    setShowCardsTRP(!showCardsTRP)
  }

  const toggleTextChangeLP = () => {
    let btnTextLP = document.getElementById('__btn-text-1')
    
    if(btnTextLP.innerText === "Show More") {
      btnTextLP.innerText = "Hide"
    } else {
      btnTextLP.innerText = "Show More"
    }


  }

  const toggleTextChangeBSP = () => {
    let btnTextBSP = document.getElementById('__btn-text-2')

    if(btnTextBSP.innerText === "Show More") {
      btnTextBSP.innerText = "Hide"
    } else {
      btnTextBSP.innerText = "Show More"
    }
  }

  const toggleTextChangeTRP = () => {
    let btnTextTRP = document.getElementById('__btn-text-3')

    if(btnTextTRP.innerText === "Show More") {
      btnTextTRP.innerText = "Hide"
    } else {
      btnTextTRP.innerText = "Show More"
    }
  }

  const toggleChangeLP = () => {
    toggleCardsLP()
    toggleTextChangeLP()
  }

  const toggleChangeBSP = () => {
    toggleCardsBSP()
    toggleTextChangeBSP()
  }

  const toggleChangeTRP = () => {
    toggleCardsTRP()
    toggleTextChangeTRP()
  }

  return (
  <section className="__sale-grid">
    <div className="container">
      <div className="__sale-grid-products">
        <h1>Latest Product</h1>
        <div className={`__sale-grid-cards ${showCardsLP ? "d-flex" : ""}`}>
          <LatestProducts products={latestProducts}/>
        </div>
        <button onClick={toggleChangeLP} className="__sale-grid-btn d-md-none" id="__btn-text-1">
          Show More
        </button>
      </div>
      <div className="__sale-grid-products">
        <h1>Best Selling Product</h1>
        <div className={`__sale-grid-cards ${showCardsBSP ? "d-flex" : ""}`}>
          <LatestProducts products={bestSellingProducts}/>
        </div>
        <button onClick={toggleChangeBSP} className="__sale-grid-btn d-md-none" id="__btn-text-2">
          Show More
        </button>
      </div>
      <div className="__sale-grid-products">
        <h1>Top Reacted Product</h1>
        <div className={`__sale-grid-cards ${showCardsTRP ? "d-flex" : ""}`}>
          <LatestProducts products={topReactedProducts}/>
        </div>
        <button onClick={toggleChangeTRP} className="__sale-grid-btn d-md-none" id="__btn-text-3">
          Show More
        </button>
      </div>
    </div>
  </section>
  )
}

export default SaleGridSection