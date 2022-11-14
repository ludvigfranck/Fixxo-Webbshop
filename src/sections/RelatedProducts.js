import React from 'react'
import ProductCard from '../components/ProductCard'

function RelatedProducts({items = []}) {
  let arrowLeft = "<"
  let arrowRight = ">"

  return (
    <section className="related-products">
        <div className="container">
          <div className="products-title">
            <h1>Related Products</h1>
            <div className="products-btn">
              <button>{arrowLeft}</button>
              <button>{arrowRight}</button>
            </div>
          </div>
            <div className="products-container">
                {
                  items.map(product => <ProductCard key={product.articleNumber} item={product} />)
                }
            </div>
        </div>
    </section>
  )
}

export default RelatedProducts