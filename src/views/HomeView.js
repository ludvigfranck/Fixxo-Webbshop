import React, { useState } from 'react'
import Banners from '../sections/Banners'
import Flashsale from '../sections/Flashsale'
import CustomerInfo from '../sections/CustomerInfo'
import Footer from '../sections/Footer'
import ProductGrid from '../sections/ProductGrid'
import Navbar from '../sections/Navbar'
import Showcase from '../sections/Showcase'
import TopPicks from '../sections/TopPicks'
import HomeViewHeader from '../sections/HomeViewHeader'

function HomeView() {

  window.top.document.title = "Fixxo."

  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?cs=srgb&dl=pexels-ylanite-koppens-934069.jpg&fm=jpg&_gl=1*9t62hq*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDcyOS4wLjAuMA.." },
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?cs=srgb&dl=pexels-godisable-jacob-871494.jpg&fm=jpg&_gl=1*1qr5hwf*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDc1Mi4wLjAuMA.." },
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1578997/pexels-photo-1578997.jpeg?cs=srgb&dl=pexels-dejan-krstevski-1578997.jpg&fm=jpg&_gl=1*k6543w*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDc3MS4wLjAuMA.." },
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?cs=srgb&dl=pexels-ylanite-koppens-934063.jpg&fm=jpg&_gl=1*7v51xm*_ga*MTAwNzk0NTUzMy4xNjY1NjcwNjY3*_ga_8JE65Q40S6*MTY2NjM0OTgzMS41LjEuMTY2NjM1MDg1MC4wLjAuMA.." }
  ])

  return (
    <>
      <HomeViewHeader />
      <ProductGrid title="FEATURED PRODUCTS" products={featuredProducts} />
      <Banners />
      <Flashsale />
      <TopPicks />
      <CustomerInfo />
      <Footer />
    </>
  )
}

export default HomeView