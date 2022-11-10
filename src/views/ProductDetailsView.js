import React, { useEffect } from 'react'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'
import ProductDetails from '../sections/ProductDetails'
import Breadcrumb from '../sections/Breadcrumb'
import { useProductContext } from '../contexts/ProductContext'
import { useParams } from 'react-router-dom'

function ProductDetailsView() {
  const {id} = useParams()
  const {product, getProduct} = useProductContext() 

  useEffect(() => {
    getProduct(id)
  }, [])
  
return (
    <>
    <Navbar />
    <Breadcrumb parentPage="Products" currentPage={product.name} />
    <ProductDetails item={product} />
    <Footer />
    </>
  )
}

export default ProductDetailsView