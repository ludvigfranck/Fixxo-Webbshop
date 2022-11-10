import React, { useEffect } from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'
import ProductGrid from '../sections/ProductGrid'
import { useProductContext } from '../contexts/ProductContext'

function Products() {
  const {products, getProducts} = useProductContext()

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Navbar />
      <Breadcrumb currentPage="Products" />
      <ProductGrid title="PRODUCTS" items={products} />
      <Footer />
    </>
  )
}

export default Products