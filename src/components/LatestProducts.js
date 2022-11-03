import React from 'react'
import SaleCard from '../components/SaleCard'

function LatestProducts({title, products}) {
  return (
    <>
        <h1>{title}</h1>
        {
            products.map(product => <SaleCard key={product.id} product={product} />)
        }
    </>
  )
}

export default LatestProducts