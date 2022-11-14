import React, { useEffect } from 'react'
import FixedFooter from '../sections/FixedFooter'
import Navbar from '../sections/Navbar'
import ProductDetails from '../sections/ProductDetails'
import Breadcrumb from '../sections/Breadcrumb'
import { useProductContext } from '../contexts/ProductContext'
import { useParams } from 'react-router-dom'
import ProductForm from '../components/ProductForm'
import ProductInfoText from '../sections/ProductInfoText'
import RelatedProducts from '../sections/RelatedProducts'
import ProductContent from '../components/ProductContent'


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
    <section className="product">
      <div className="container">
        <ProductDetails item={product} />
        <div className="product-content">
          <ProductContent item={product} />
          <ProductForm item={product} init={1} />
        </div>
      </div>
    </section>
    <ProductInfoText />
    <RelatedProducts items={relatedProducts} />
    <FixedFooter />
    </>
  )
}

export default ProductDetailsView