import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

function ProductDetailsView() {
  
const params = useParams()  
  
return (
    <>
    <Navbar />
    <div className="container mt-5 mb-5 d-flex justify-content-center">
        <h1>{params.name}</h1>
    </div>
    <Footer />
    </>
  )
}

export default ProductDetailsView