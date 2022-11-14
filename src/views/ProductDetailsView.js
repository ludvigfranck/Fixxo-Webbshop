import React, { useEffect } from 'react'
import FixedFooter from '../sections/FixedFooter'
import Navbar from '../sections/Navbar'
import ProductDetails from '../sections/ProductDetails'
import Breadcrumb from '../sections/Breadcrumb'
import { useProductContext } from '../contexts/ProductContext'
import { useParams } from 'react-router-dom'
import ProductInfoText from '../sections/ProductInfoText'
import RelatedProducts from '../sections/RelatedProducts'


function ProductDetailsView() {
const {id} = useParams()
const {product, getProduct} = useProductContext() 
const { relatedProducts, getRelatedProducts } = useProductContext()

useEffect(() => {
  getProduct(id)
  getRelatedProducts(4)
}, [])
  
return (
    <>
    <Navbar />
    <div className="fixxo-sale container">
      <p className="fixxo-sale-title">Get 25% OFF at the Fixxo Selection - Shop Now!</p>
    </div>
    <Breadcrumb parentPage="Products" currentPage={product.name} />
    <ProductDetails item={product} />
    <ProductInfoText />
    <RelatedProducts items={relatedProducts} />
    <FixedFooter />
    </>
  )
}

export default ProductDetailsView