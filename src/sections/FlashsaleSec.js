import React from 'react'
import FlashsaleCards from '../components/FlashsaleCards'
import FlashsaleContainer from '../components/FlashsaleContainer'

function FlashsaleSec() {
  return (
    <section className="__flashsale __flashsale-sec">
    <div className="container">
        <div className="d-flex justify-content-end">
      <FlashsaleCards />
      </div>
      <FlashsaleContainer />
    </div>
  </section>
  )
}

export default FlashsaleSec