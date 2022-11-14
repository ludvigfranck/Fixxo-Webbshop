import React from 'react'

function ProductContent({item}) {
  return (
    <div className="product-details">
        <h1 className="product-title">{item.name}</h1>
        <p>SKU: 12345670 BRAND: The Northland</p>
        <p className="product-rating">
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
        </p>
        <p className="product-price">{item.price} $</p>
        <p className="product-info">
            Discovered had get considered projection who favourable. 
            Necessary up knowledge it tolerably. Unwilling departure 
            education is be dashwoods or an. Use off agreeable law 
            unwilling sir deficient curiosity instantly. (read more) 
        </p>
    </div>
  )
}

export default ProductContent