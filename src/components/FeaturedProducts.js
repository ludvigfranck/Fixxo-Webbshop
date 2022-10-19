import React from 'react'
import Card from './Card'

function FeaturedProducts() {
  return (
    <section className="__featured-products">
        <h1>FEATURED PRODUCT</h1>
        <div className="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts