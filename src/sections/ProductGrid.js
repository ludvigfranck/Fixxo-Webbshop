import React from 'react'
import ProductCard from '../components/ProductCard'

function ProductGrid({title, items = []}) {
  return (
    <section className="product-grid">
        <div className="container">
          <h1 data-testid="title">{title}</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4" data-testid="featuredProducts">
                {
                  items.map(product => <ProductCard key={product.articleNumber} item={product} />)
                }
            </div>
        </div>
    </section>
  )
}

export default ProductGrid