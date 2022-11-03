import React, { useState } from 'react'
import BestSellingProducts from '../components/BestSellingProducts'
import LatestProducts from '../components/LatestProducts'
import TopReactedProducts from '../components/TopReactedProducts'



function SaleGridSection({title}) {
  
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

  return (
  <section className="__sale-grid">
    <div className="container">
      <div className="__sale-grid-products">
        <h1>{title}</h1>
        <div className="__sale-grid-cards">
          <LatestProducts title="Latest Products" products={latestProducts}/>
        </div>
      </div>
      <div className="__sale-grid-products">
        <h1>{title}</h1>
        <div className="__sale-grid-cards">
          <BestSellingProducts title="Best Selling Products" products={bestSellingProducts} />
        </div>
      </div>
      <div className="__sale-grid-products">
        <h1>{title}</h1>
        <div className="__sale-grid-cards">
          <TopReactedProducts title="Top Reacted Products" products={topReactedProducts} />
        </div>
      </div>
    </div>
  </section>
  )
}

export default SaleGridSection