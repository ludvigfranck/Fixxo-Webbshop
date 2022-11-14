import React from 'react'
import ProductCard from '../components/ProductCard'

function RelatedProducts({items = []}) {
  let arrowLeft = "<"
  let arrowRight = ">"

  /*
  Fick inte till slide funktionaliteten...
  Men hoppas att det duger med bara design. 
  Använde inte heller några produkter som relaterar till produkten som visas 
  utan jag tog bara fyra produkter från api. 
  */

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