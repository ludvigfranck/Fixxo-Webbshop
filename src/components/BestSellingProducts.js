import React from 'react'
import SaleCard from '../components/SaleCard'

function BestSellingProducts({title, products}) {
  return (
    <>
        <h1>{title}</h1>
        {
            products.map(product => <SaleCard key={product.id} product={product} />)
        }
    </>
  )
}

export default BestSellingProducts