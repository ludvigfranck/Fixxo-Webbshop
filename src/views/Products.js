import React, { useContext } from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'
import ProductGrid from '../sections/ProductGrid'
import { ProductContext } from '../contexts/contexts'

function Products() {
  const productContext = useContext(ProductContext)
  
  return (
    <>
    <Navbar />
    <Breadcrumb currentPage="Products" />
    <ProductGrid title="PRODUCTS" items={productContext.allProducts} />
    <Footer />
    </>
  )
}

export default Products