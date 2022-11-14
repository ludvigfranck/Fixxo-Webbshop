import React from 'react'

function ProductDetails({item}) {
return (
<section className="product">
    <div className="container">
        <div className="product-images">
            <div className="main-image">
                <img src={item.imageName} alt={item.name} />
            </div>
            <div className="sub-image">
                <img src={item.imageName} alt={item.name} />
                <img src={item.imageName} alt={item.name} />
                <img src={item.imageName} alt={item.name} />
            </div>
        </div>
    </div>
</section>
)
}

export default ProductDetails