import React from 'react'
import ProductCard from './ProductCard'

function SaleCard({ title, items = [] }) {

  return (
    <>
      <h1>{title}</h1>
      {
        items.map(product => <ProductCard key={product.articleNumber} item={product} />)
      }
    </>
  )
}

export default SaleCard