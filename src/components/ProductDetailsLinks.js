import React from 'react'

function ProductDetailsLinks({link, icon}) {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}

export default ProductDetailsLinks