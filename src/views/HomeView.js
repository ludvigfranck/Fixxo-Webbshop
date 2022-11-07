import React, { useContext } from 'react'
import Banners from '../sections/Banners'
import Flashsale from '../sections/Flashsale'
import CustomerInfo from '../sections/CustomerInfo'
import Footer from '../sections/Footer'
import ProductGrid from '../sections/ProductGrid'
import TopPicks from '../sections/TopPicks'
import HomeViewHeader from '../sections/HomeViewHeader'
import NewArrivals from '../sections/NewArrivals'
import SpecialitySection from '../sections/SpecialitySection'
import DiscountSection from '../sections/DiscountSection'
import SaleGridSection from '../sections/SaleGridSection'
import { ProductContext } from '../contexts/contexts'

function HomeView() {

  window.top.document.title = "Fixxo."

  const productContext = useContext(ProductContext)

  return (
    <>
      {/* <HomeViewHeader />
      <NewArrivals />
      <ProductGrid title="FEATURED PRODUCTS" items={productContext.featuredProducts} />
      <Banners />
      <SpecialitySection /> */}
      <Flashsale items={productContext.flashSaleProducts} />
      <TopPicks items={productContext.topPicksProducts} />
      {/* <DiscountSection /> */}
      {/* <SaleGridSection /> */}
      {/* <CustomerInfo />
      <Footer /> */}
    </>
  )
}

export default HomeView