import React from 'react'
import Header from '../sections/Header'
import FeaturedProducts from '../sections/FeaturedProducts'
import Banners from '../sections/Banners'
import Flashsale from '../sections/Flashsale'
import CustomerInfo from '../sections/CustomerInfo'
import Footer from '../sections/Footer'

function HomeView() {
  return (
    <>
      <Header />
      <FeaturedProducts />
      <Banners />
      <Flashsale />
      <CustomerInfo />
      <Footer />
    </>
  )
}

export default HomeView