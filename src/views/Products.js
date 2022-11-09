import React, { useContext } from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'
import ProductGrid from '../sections/ProductGrid'
import { useProductContext } from '../contexts/ProductContext'

function Products() {

  return (
    <>
      <Navbar />
      <Breadcrumb currentPage="Products" />
      <ProductGrid title="PRODUCTS" />
      <Footer />
    </>
  )
}

export default Products