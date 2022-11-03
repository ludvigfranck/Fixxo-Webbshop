import React from 'react'
import SaleCard from '../components/SaleCard'

function LatestProducts({products}) {
  return (
    <>
        {
            products.map(product => <SaleCard key={product.id} product={product} />)
        }
    </>
  )
}

export default LatestProducts