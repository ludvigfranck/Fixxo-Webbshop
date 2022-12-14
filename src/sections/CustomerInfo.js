import React from 'react'
import CustomerInfoLinks from '../components/CustomerInfoLinks'

function CustomerInfo() {
  return (
    <section className="__customer-info">
        <div className="__customer-info-border"></div>
        <div className="container">
            <CustomerInfoLinks link="/support" icon="fa-regular fa-headset" title="Customer Support"></CustomerInfoLinks>
            <CustomerInfoLinks link="/payment" icon="fa-regular fa-credit-card" title="Secured Payment"></CustomerInfoLinks>
            <CustomerInfoLinks link="/delivery" icon="fa-regular fa-truck" title="Free Home Delivery"></CustomerInfoLinks>
            <CustomerInfoLinks link="/returns" icon="fa-regular fa-truck" title="30 Day Reuters"></CustomerInfoLinks>
        </div>
    </section>
  )
}

export default CustomerInfo