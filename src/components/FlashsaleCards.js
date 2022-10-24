import React from 'react'
import ProductCard from '../components/ProductCard'

function FlashsaleCards({products}) {
  
  
  return (
    <>
      {
        products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </>
  )
}

export default FlashsaleCards