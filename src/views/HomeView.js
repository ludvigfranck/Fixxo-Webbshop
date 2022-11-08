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
import { FeaturedProductsContext, FlashsaleProductContext } from '../contexts/contexts'

function HomeView() {

  window.top.document.title = "Fixxo."

  const featuredProducts = useContext(FeaturedProductsContext);
  const flashsaleProducts = useContext(FlashsaleProductContext);

  return (
    <>
      <HomeViewHeader />
      <NewArrivals />
      <ProductGrid title="FEATURED PRODUCTS" items={featuredProducts} />
      <Banners />
      <SpecialitySection />
      <Flashsale items={flashsaleProducts} />
      {/* <TopPicks items={flashsaleProducts} /> */}
      <DiscountSection />
      <SaleGridSection />
      <CustomerInfo />
      <Footer />
    </>
  )
}

export default HomeView